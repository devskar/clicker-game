interface Items {
  name: string;
  id: number;
  basePrice: number;
  priceMultiplier: number;
  baseFollowerPerClick: number;
  followerPerClickMultiplier: number;
  baseFollowerPerSecond: number;
  followerPerSecondMultiplier: number;
  currentLevel: number;
  description: string;
}

export default Items;
