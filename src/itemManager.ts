import editJsonFile, { JsonEditor } from 'edit-json-file';
import { ITEMS_FILE_PATH } from './const';
import config from '../assets/Items.json';

let file: editJsonFile.JsonEditor | null = null;

interface Item {
  name: string;
  id: string;
  price: number;
  currentLevel: number;
  description: string;
}

class ItemManager {
  file: JsonEditor | null;

  constructor() {
    // make item file known to webpack
    config;
    this.file = null;
    this.loadFile();
  }

  fileLoaded = () => {
    return this.file != null;
  };

  loadFile = () => {
    file = editJsonFile(ITEMS_FILE_PATH, { autosave: true });
    return file;
  };

  getItems = (): Item[] => {
    const items: Item[] = JSON.parse(JSON.stringify(file?.read()));
    return items;
  };

  upgradeItem = (id: number) => {
    const items = this.getItems();
    const item = items[id];

    item.currentLevel += 1;

    items[id] = item;

    file?.write(JSON.stringify(items));
  };
}

export default ItemManager;
