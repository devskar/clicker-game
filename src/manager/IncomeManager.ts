import { round } from '../utils';
import ItemManager from './ItemManager';

class IncomeManager {
  itemManager: ItemManager;

  constructor(ItemManager: ItemManager) {
    this.itemManager = ItemManager;
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
