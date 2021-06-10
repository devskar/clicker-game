interface Items {
  name: string;
  id: number;
  basePrice: number;
  priceMultiplier: number;
  baseMoneyPerClick: number;
  moneyPerClickMultiplier: number;
  baseMoneyPerSecond: number;
  moneyPerSecondMultiplier: number;
  currentLevel: number;
  description: string;
}

export default Items;
