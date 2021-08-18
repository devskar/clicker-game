import enMessages from '../assets/lang/en.json';
import deMessages from '../assets/lang/de.json';

export const ITEMS_FILE_PATH = __dirname + '/assets/Items.json';
export const UPGRADES_FILE_PATH = __dirname + '/assets/Upgrades.json';
export const ACCOUNT_FILE_PATH = __dirname + '/assets/Account.json';
export const SETTINGS_FILE_PATH = __dirname + '/assets/Settings.json';
export const BACKGROUND_LOOP_FILE_PATH =
  __dirname + '/assets/audio/loops/background_music.mp3';

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
export const IPC_SETTINGSWINDOW_OPEN = 'settingswindow:open';
export const IPC_BACKGROUNDVOLUME_UPDATE = 'backgroundvolume:update';
export const IPC_SETTINGS_BACKGROUNDVOLUME_GET =
  'settings_backgroundvolume:get';
export const IPC_USER_BACKGROUNDVOLUME_CHANGE = 'user_backgroundvolume:change';
export const IPC_BACKGROUNDVOLUME_REPLY = 'backgroundvolume:reply';

export const CSS_HIGHLIGHT_COLOR_VARIABLE = '--highlight-color';
export const CSS_HIGHLIGHT_EXAMPLE_COLORS = ['blue', 'purple', 'gray'];

export const LANGUAGES_MAP = {
  en: enMessages,
  de: deMessages,
};

export type Language = keyof typeof LANGUAGES_MAP;
