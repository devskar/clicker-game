import { app, BrowserWindow, ipcMain } from 'electron';
import isDev from 'electron-is-dev';
import {
  IPC_ITEMS_GET_ALL,
  IPC_ITEM_UPGRADE,
  IPC_ITEMS_UPDATE,
  IPC_FOLLOWER_GET,
  IPC_FOLLOWER_UPDATE,
  IPC_INCOME_UPDATE,
  IPC_MAIN_BUTTON_CLICKED,
  IPC_UPGRADES_GET_ALL,
  IPC_UPGRADES_UPDATE,
  IPC_UPGRADE_BUY,
} from './const';
import Item from './entities/Item';
import AccountManager from './manager/AccountManager';
import IncomeManager from './manager/IncomeManager';
import ItemManager from './manager/ItemManager';
import { round } from './utils';
import Icon from '../assets/images/main.ico';
import UpgradeManager from './manager/UpgradeManager';
import Upgrade from './entities/Upgrade';
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
    icon: Icon,
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
const upgradeManager = new UpgradeManager();
const accountManager = new AccountManager();
const incomeManager = new IncomeManager(itemManager, upgradeManager);

// SENDER
const sendItemUpdate = (items: Item[]) => {
  mainWindow?.webContents.send(IPC_ITEMS_UPDATE, items);
};

const sendUpgradeUpdate = (upgrades: Upgrade[]) => {
  mainWindow?.webContents.send(IPC_UPGRADES_UPDATE, upgrades);
};

const sendFollowerUpdate = (amount: number) => {
  mainWindow?.webContents.send(IPC_FOLLOWER_UPDATE, amount);
};

const sendIncomeUpdate = (amount: number) => {
  mainWindow?.webContents.send(IPC_INCOME_UPDATE, amount);
};

// LISTENER
ipcMain.on(IPC_MAIN_BUTTON_CLICKED, (event) => {
  accountManager.increaseFollower(incomeManager.getFollowerPerClick());
  event.reply(IPC_FOLLOWER_UPDATE, accountManager.getFollower());
});

// items
ipcMain.on(IPC_FOLLOWER_GET, (event) => {
  event.reply(IPC_FOLLOWER_UPDATE, accountManager.getFollower());
});

ipcMain.on(IPC_ITEMS_GET_ALL, (event) => {
  event.reply(IPC_ITEMS_UPDATE, itemManager.getItems());
});

ipcMain.on(IPC_ITEM_UPGRADE, (_, id: number) => {
  const item = itemManager.getItem(id);

  if (ItemManager.canUpgradeItem(item, accountManager.getFollower())) {
    accountManager.decreaseFollower(ItemManager.getItemPrice(item));
    sendFollowerUpdate(accountManager.getFollower());

    itemManager.upgradeItem(item);
    sendItemUpdate(itemManager.getItems());
  }
});

// upgrades

ipcMain.on(IPC_UPGRADES_GET_ALL, (event) => {
  event.reply(IPC_UPGRADES_UPDATE, upgradeManager.getUpgrades());
});

ipcMain.on(IPC_UPGRADE_BUY, (_, id: number) => {
  const upgrade = upgradeManager.getUpgrade(id);

  if (UpgradeManager.canBuyUpgrade(upgrade, accountManager.getFollower())) {
    accountManager.decreaseFollower(UpgradeManager.getUpgradePrice(upgrade));
    sendFollowerUpdate(accountManager.getFollower());

    upgradeManager.buyUpgrade(upgrade);
    sendUpgradeUpdate(upgradeManager.getUpgrades());
  }
});

// START Follower LOOP

var followerAtLastTick = accountManager.getFollower();

const gameLoop = () => {
  const currentFollowerPerSecond = incomeManager.getFollowerPerSecond();
  const currentFollower = accountManager.getFollower();

  accountManager.increaseFollower(currentFollowerPerSecond);
  sendFollowerUpdate(currentFollower);

  sendIncomeUpdate(round(currentFollower - followerAtLastTick));

  followerAtLastTick = currentFollower;

  setTimeout(() => gameLoop(), 1 * 1000);
};

gameLoop();
