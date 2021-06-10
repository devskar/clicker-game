import { ITEMS_FILE_PATH } from '../const';
import itemFile from '../../assets/Items.json';
import Item from '../entities/Item';
import FileManager from './FileManager';

class ItemManager extends FileManager {
  constructor() {
    super(ITEMS_FILE_PATH);

    // make item file known to webpack
    itemFile;
  }

  getItems = (): Item[] => {
    const items: Item[] = JSON.parse(JSON.stringify(this.cashedContent));
    return items;
  };

  upgradeItem = (id: number) => {
    this.cashedContent[id].currentLevel += 1;
  };
}

export default ItemManager;
