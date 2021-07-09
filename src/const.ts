import enUSMessages from '../assets/lang/en-US.json';
import deMessages from '../assets/lang/de.json';

export const ITEMS_FILE_PATH = __dirname + '/assets/Items.json';
export const UPGRADES_FILE_PATH = __dirname + '/assets/Upgrades.json';
export const ACCOUNT_FILE_PATH = __dirname + '/assets/Account.json';

// IPC MESSAGES
export const IPC_ITEMS_GET_ALL = 'items:getAll';
export const IPC_ITEMS_UPDATE = 'items:update';
export const IPC_ITEM_UPGRADE = 'item:upgrade';
export const IPC_UPGRADES_GET_ALL = 'upgrades:getAll';
export const IPC_UPGRADES_UPDATE = 'upgrades:update';
export const IPC_UPGRADE_BUY = 'upgrades:buy';
export const IPC_FOLLOWER_GET = 'follower:get';
export const IPC_FOLLOWER_UPDATE = 'follower:update';
export const IPC_INCOME_UPDATE = 'income:update';
export const IPC_MAIN_BUTTON_CLICKED = 'mainButton:clicked';
export const IPC_LANGUAGE_CHANGE = 'language:change';
export const IPC_LANGUAGE_UPDATE = 'language:update';
export const IPC_LANGUAGE_GET = 'language:get';

export const LANGUAGES = new Map<string, Record<string, string>>([
  ['en-US', enUSMessages],
  ['de', deMessages],
]);
