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
          item.moneyPerSecond *
          (1 + item.currentLevel * item.moneyPerSecondMultiplier);
      }
    }

    return round(moneyPerSecond);
  }

  getMoneyPerClick() {
    let moneyPerClick: number = 1;

    for (const item of this.itemManager.getItems()) {
      if (item.currentLevel > 0) {
        moneyPerClick +=
          item.moneyPerClick *
          (1 + item.currentLevel * item.moneyPerClickMultiplier);
      }
    }

    return round(moneyPerClick);
  }
}

export default IncomeManager;
