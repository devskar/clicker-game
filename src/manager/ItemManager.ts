import { ITEMS_FILE_PATH } from '../const';
import itemFile from '../../assets/Items.json';
import Item from '../entities/Item';
import FileManager from './FileManager';

class ItemManager extends FileManager {
  constructor() {
    super(ITEMS_FILE_PATH);

    // // make item file known to webpack
    itemFile;
  }

  getItems = (): Item[] => {
    const items: Item[] = JSON.parse(JSON.stringify(this.cashedContent));
    return items;
  };

  getItem = (id: number): Item => {
    return this.cashedContent[id];
  };

  static getItemUpgradeCosts = (item: Item) => {
    return Math.round(
      item.basePrice * item.priceMultiplier ** item.currentLevel,
    );
  };

  getItemUpgradeCostsById = (id: number) => {
    return ItemManager.getItemUpgradeCosts(this.cashedContent[id]);
  };

  static getItemXUpgradeCosts = (item: Item, amount: number) => {
    return Math.round(
      item.basePrice *
        item.priceMultiplier **
          (item.currentLevel * (item.priceMultiplier ^ (amount - 1))) *
        (item.priceMultiplier - 1),
    );
  };

  getItemXUpgradeCostsById = (id: number, amount: number) => {
    return ItemManager.getItemXUpgradeCosts(this.cashedContent[id], amount);
  };

  static canUpgradeItem = (item: Item, follower: number): boolean => {
    return ItemManager.getItemUpgradeCosts(item) <= follower;
  };

  canUpgradeItemById = (item_id: number, follower: number): boolean => {
    return ItemManager.canUpgradeItem(this.cashedContent[item_id], follower);
  };

  upgradeItemById = (id: number) => {
    this.cashedContent[id].currentLevel += 1;
  };

  maxUpgradeItemById = (id: number) => {};

  upgradeItem = (item: Item) => {
    this.upgradeItemById(item.id);
  };
}

export default ItemManager;
