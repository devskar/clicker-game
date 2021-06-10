import ItemManager from './ItemManager';

class MoneyManager {
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

    return moneyPerSecond;
  }
}

export default MoneyManager;
