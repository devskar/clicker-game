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
      if (item.currentLevel > 0) {
        followerPerSecond +=
          item.baseFollowerPerSecond +
          item.currentLevel *
            item.followerPerSecondMultiplier *
            item.baseFollowerPerSecond;
      }
    }

    return round(followerPerSecond);
  }

  getFollowerPerClick() {
    let followerPerClick: number = 1;

    for (const item of this.itemManager.getItems()) {
      if (item.currentLevel > 0) {
        const toBeAdded =
          item.baseFollowerPerClick *
          ((item.currentLevel - 1) * item.followerPerClickMultiplier);

        followerPerClick += toBeAdded >= 1 ? toBeAdded : 1;
      }
    }

    return round(followerPerClick);
  }
}

export default IncomeManager;
