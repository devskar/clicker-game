export interface Upgrade {
  name: string;
  id: number;
  price: number;
  bought: boolean;
  moneyPerSecondMultiplier: number;
  moneyPerClickMultiplier: number;
}

export default Upgrade;
