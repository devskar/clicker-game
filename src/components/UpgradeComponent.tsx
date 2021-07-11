import { ipcRenderer } from 'electron';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { IPC_UPGRADE_BUY } from '../const';
import Upgrade from '../entities/Upgrade';

interface Props {
  upgrade: Upgrade;
}

const UpgradeComponent: React.FC<Props> = ({ upgrade }) => {
  return (
    <div className='upgradeComponent component'>
      <img
        className={
          'upgradeComponentImage' + (upgrade.bought ? ' upgradeBought' : '')
        }
        onClick={() => {
          if (!upgrade.bought) ipcRenderer.send(IPC_UPGRADE_BUY, upgrade.id);
        }}
      ></img>
      <div className='upgradeHoverDiv'>
        <p>{upgrade.name}</p>
        <p className='upgradeDescription main-font'>{upgrade.description}</p>
        <div className='upgradeStats'>
          <div className='upgradeLevel upgradeStat'>
            <span className='key'>
              <FormattedMessage id='upgradecomponent.bought' />
              {': '}
            </span>
            <span className='value main-font'>
              {upgrade.bought ? (
                <FormattedMessage id='yes' />
              ) : (
                <FormattedMessage id='no' />
              )}
            </span>
          </div>
          <div className='upgradeCosts upgradeStat'>
            <span className='key'>
              <FormattedMessage id='upgradecomponent.costs' />
              {': '}
            </span>
            <span className='value main-font'>{upgrade.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeComponent;
