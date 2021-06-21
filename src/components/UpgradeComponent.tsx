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
        test
      </div>
    </div>
  );
};

export default UpgradeComponent;
