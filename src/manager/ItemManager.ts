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

  getItem = (id: number): Item => {
    return this.cashedContent[id];
  };

  static getItemPrice = (item: Item) => {
    return (
      item.basePrice + item.currentLevel * item.priceMultiplier * item.basePrice
    );
  };

  getItemPriceById = (id: number) => {
    return ItemManager.getItemPrice(this.cashedContent[id]);
  };

  static canUpgradeItem = (item: Item, money: number): boolean => {
    return ItemManager.getItemPrice(item) <= money;
  };

  canUpgradeItemById = (item_id: number, money: number): boolean => {
    return ItemManager.canUpgradeItem(this.cashedContent[item_id], money);
  };

  upgradeItemById = (id: number) => {
    this.cashedContent[id].currentLevel += 1;
  };

  upgradeItem = (item: Item) => {
    this.upgradeItemById(item.id);
  };
}

export default ItemManager;
