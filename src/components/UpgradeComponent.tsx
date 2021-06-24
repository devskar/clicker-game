import { ipcRenderer } from 'electron';
import React from 'react';
import { IPC_UPGRADE_BUY } from '../const';
import Upgrade from '../entities/Upgrade';

interface Props {
  upgrade: Upgrade;
  color: string;
}

const UpgradeComponent: React.FC<Props> = ({ upgrade, color }) => {
  return (
    <div className='upgradeComponent component'>
      <img
        className={
          'upgradeComponentImage' + (upgrade.bought ? ' upgradeBought' : '')
        }
        style={{ backgroundColor: color }}
        onClick={() => {
          if (!upgrade.bought) ipcRenderer.send(IPC_UPGRADE_BUY, upgrade.id);
        }}
      ></img>
      <div className='upgradeHoverDiv'>
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
