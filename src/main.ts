import { app, BrowserWindow, ipcMain } from 'electron';
import isDev from 'electron-is-dev';
import {
  IPC_ITEMS_GET_ALL,
  IPC_ITEM_UPGRADE,
  IPC_ITEMS_UPDATE,
  IPC_MONEY_GET,
  IPC_MONEY_UPDATE,
  IPC_INCOME_UPDATE,
} from './const';
import Item from './entities/Item';
import AccountManager from './manager/AccountManager';
import ItemManager from './manager/ItemManager';
import IncomeManager from './manager/IncomeManager';
import { round } from './utils';
declare var MAIN_WINDOW_WEBPACK_ENTRY: any;
declare var MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: any;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow: BrowserWindow | null = null;

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    autoHideMenuBar: true,
    show: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  // if (isDev) mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    [itemManager, accountManager].map((manager) => manager.save());

    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  mainWindow.show();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

const itemManager = new ItemManager();
const accountManager = new AccountManager();
const incomeManager = new IncomeManager(itemManager);

// SENDER
const sendItemUpdate = (items: Item[]) => {
  mainWindow?.webContents.send(IPC_ITEMS_UPDATE, items);
};

const sendMoneyUpdate = (amount: number) => {
  mainWindow?.webContents.send(IPC_MONEY_UPDATE, amount);
};

const sendIncomeUpdate = (amount: number) => {
  mainWindow?.webContents.send(IPC_INCOME_UPDATE, amount);
};

// LISTENER
ipcMain.on('money-button:clicked', (event) => {
  accountManager.increaseMoney(1);
  event.reply(IPC_MONEY_UPDATE, accountManager.getMoney());
});

ipcMain.on(IPC_MONEY_GET, (event) => {
  event.reply(IPC_MONEY_UPDATE, accountManager.getMoney());
});

ipcMain.on(IPC_ITEMS_GET_ALL, (event) => {
  event.reply(IPC_ITEMS_UPDATE, itemManager.getItems());
});

ipcMain.on(IPC_ITEM_UPGRADE, (_, id: number) => {
  itemManager.upgradeItem(id);
  sendItemUpdate(itemManager.getItems());
});

// START MONEY LOOP

var moneyAtLastTick = accountManager.getMoney();

const moneyLoop = () => {
  const currentMoneyPerSecond = incomeManager.getMoneyPerSecond();
  const currentMoney = accountManager.getMoney();

  accountManager.increaseMoney(currentMoneyPerSecond);
  sendMoneyUpdate(currentMoney);

  sendIncomeUpdate(round(currentMoney - moneyAtLastTick));

  moneyAtLastTick = currentMoney;

  setTimeout(() => moneyLoop(), 1 * 1000);
};

moneyLoop();
