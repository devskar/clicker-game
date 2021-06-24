import { round } from '../utils';
import ItemManager from './ItemManager';
import UpgradeManager from './UpgradeManager';

class IncomeManager {
  itemManager: ItemManager;
  upgradeManager: UpgradeManager;

  constructor(ItemManager: ItemManager, upgradeManager: UpgradeManager) {
    this.itemManager = ItemManager;
    this.upgradeManager = upgradeManager;
  }

  getFollowerPerSecond() {
    let followerPerSecond: number = 0;

    for (const item of this.itemManager.getItems()) {
      if (item.currentLevel > 0 && item.baseFollowerPerSecond > 0) {
        followerPerSecond +=
          item.baseFollowerPerSecond +
          item.currentLevel *
            item.followerPerSecondMultiplier *
            item.baseFollowerPerSecond;
      }
    }

    for (const upgrade of this.upgradeManager.getUpgrades()) {
      if (upgrade.bought && upgrade.moneyPerSecondMultiplier > 0)
        followerPerSecond *= upgrade.moneyPerSecondMultiplier;
    }

    return round(followerPerSecond);
  }

  getFollowerPerClick() {
    let followerPerClick: number = 1;

    for (const item of this.itemManager.getItems()) {
      if (item.currentLevel > 0 && item.baseFollowerPerClick > 0) {
        const toBeAdded =
          item.baseFollowerPerClick *
          ((item.currentLevel - 1) * item.followerPerClickMultiplier);

        followerPerClick += toBeAdded >= 1 ? toBeAdded : 1;
      }
    }

    for (const upgrade of this.upgradeManager.getUpgrades()) {
      if (upgrade.bought && upgrade.moneyPerClickMultiplier > 0)
        followerPerClick *= upgrade.moneyPerClickMultiplier;
    }

    return round(followerPerClick);
  }
}

export default IncomeManager;
