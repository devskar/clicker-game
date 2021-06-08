import editJsonFile, { JsonEditor } from 'edit-json-file';
import { ITEMS_FILE_PATH } from '../const';
import itemFile from '../../assets/Items.json';
import Item from '../entities/Item';
import Manager from './Manager';

class ItemManager extends Manager {
  constructor() {
    super(ITEMS_FILE_PATH);

    // make item file known to webpack
    itemFile;
  }

  getItems = (): Item[] => {
    const items: Item[] = JSON.parse(JSON.stringify(this.file?.read()));
    return items;
  };

  upgradeItem = (id: number) => {
    const items = this.getItems();
    const item = items[id];

    item.currentLevel += 1;

    items[id] = item;

    this.file?.write(JSON.stringify(items));
  };
}

export default ItemManager;
