import React from 'react';
import Upgrade from '../entities/Upgrade';

interface Props {
  upgrade: Upgrade;
  color: string;
}

const UpgradeComponent: React.FC<Props> = ({ upgrade, color }) => {
  return (
    <div className='upgradeComponent component'>
      <img
        className='upgradeComponentImage'
        style={{ backgroundColor: color }}
      ></img>
      <div
        className='upgradeHoverDiv'
        style={{ backgroundColor: 'black', color: 'white' }}
      >
        <p>{upgrade.name}</p>
        <p className='upgradeDescription main-font'>{upgrade.description}</p>
        <div className='upgradeStats'>
          <div className='upgradeLevel upgradeStat'>
            <span className='key'>bought: </span>
            <span className='value main-font'>
              {upgrade.bought ? 'yes' : 'no'}
            </span>
          </div>
          <div className='upgradeCosts upgradeStat'>
            <span className='key'>costs: </span>
            <span className='value main-font'>{upgrade.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeComponent;
