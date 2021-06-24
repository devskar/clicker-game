import { UPGRADES_FILE_PATH } from '../const';
import upgradeFile from '../../assets/Upgrades.json';
import Upgrade from '../entities/Upgrade';
import FileManager from './FileManager';

class UpgradeManager extends FileManager {
  constructor() {
    super(UPGRADES_FILE_PATH);

    // make item file known to webpack
    upgradeFile;
  }

  getUpgrades = (): Upgrade[] => {
    const items: Upgrade[] = JSON.parse(JSON.stringify(this.cashedContent));
    return items;
  };

  getUpgrade = (id: number): Upgrade => {
    return this.cashedContent[id];
  };

  static getUpgradePrice = (upgrade: Upgrade) => {
    return upgrade.price;
  };

  getUpgradePriceById = (id: number) => {
    return UpgradeManager.getUpgradePrice(this.cashedContent[id]);
  };

  static canBuyUpgrade = (upgrade: Upgrade, follower: number): boolean => {
    return UpgradeManager.getUpgradePrice(upgrade) <= follower;
  };

  canBuyUpgradeById = (upgrade_id: number, follower: number): boolean => {
    return UpgradeManager.canBuyUpgrade(
      this.cashedContent[upgrade_id],
      follower,
    );
  };

  buyUpgradeById = (id: number) => {
    this.cashedContent[id].bought = true;
  };

  buyUpgrade = (item: Upgrade) => {
    this.buyUpgradeById(item.id);
  };
}

export default UpgradeManager;
