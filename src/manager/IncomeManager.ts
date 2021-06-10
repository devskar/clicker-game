import { round } from '../utils';
import ItemManager from './ItemManager';

class IncomeManager {
  itemManager: ItemManager;

  constructor(ItemManager: ItemManager) {
    this.itemManager = ItemManager;
  }

  getMoneyPerSecond() {
    let moneyPerSecond: number = 0;

    for (const item of this.itemManager.getItems()) {
      if (item.currentLevel > 0) {
        moneyPerSecond +=
          item.moneyPerSecond +
          item.currentLevel *
            item.moneyPerSecondMultiplier *
            item.moneyPerSecond;
      }
    }

    return round(moneyPerSecond);
  }

  getMoneyPerClick() {
    let moneyPerClick: number = 1;

    for (const item of this.itemManager.getItems()) {
      if (item.currentLevel > 0) {
        const toBeAdded =
          item.moneyPerClick *
          ((item.currentLevel - 1) * item.moneyPerClickMultiplier);

        moneyPerClick += toBeAdded >= 1 ? toBeAdded : 1;
      }
    }

    return round(moneyPerClick);
  }
}

export default IncomeManager;
