export interface Upgrade {
  name: string;
  id: number;
  price: number;
  bought: boolean;
  moneyPerSecondMultiplier: number;
  moneyPerClickMultiplier: number;
  description: string;
}

export default Upgrade;
