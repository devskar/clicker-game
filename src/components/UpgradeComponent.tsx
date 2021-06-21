import React from 'react';
import Upgrade from '../entities/Upgrade';

interface Props {
  upgrade: Upgrade;
}

const UpgradeComponent: React.FC<Props> = ({ upgrade }) => {
  return (
    <div className='upgradeComponent component'>
      <p>{upgrade.name}</p>
    </div>
  );
};

export default UpgradeComponent;
