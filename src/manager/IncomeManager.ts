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
      followerPerSecond +=
        item.baseFollowerPerSecond *
        item.currentLevel *
        item.followerPerSecondMultiplier;
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
      followerPerClick += Math.round(
        item.baseFollowerPerClick *
          item.currentLevel *
          item.followerPerClickMultiplier,
      );
    }

    for (const upgrade of this.upgradeManager.getUpgrades()) {
      if (upgrade.bought && upgrade.moneyPerClickMultiplier > 0)
        followerPerClick *= upgrade.moneyPerClickMultiplier;
    }

    return round(followerPerClick);
  }
}

export default IncomeManager;
