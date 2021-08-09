import { ipcRenderer } from 'electron';
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { IPC_UPGRADES_GET_ALL, IPC_UPGRADES_UPDATE } from '../const';
import Upgrade from '../entities/Upgrade';
import UpgradeComponent from './UpgradeComponent';

interface Props {}

const UpgradeContainer: React.FC<Props> = () => {
  const [upgradeData, setUpgradeData] = useState<Upgrade[]>();

  useEffect(() => {
    ipcRenderer.on(IPC_UPGRADES_UPDATE, (_, updatedItemData: Upgrade[]) => {
      setUpgradeData(updatedItemData);
    });

    ipcRenderer.send(IPC_UPGRADES_GET_ALL);
  }, []);

  return (
    <div id='upgradeContainer' className='non-selectable'>
      <h2 className='main-font containerHeading'>
        <FormattedMessage id='upgrades' />
      </h2>
      <div className='upgradeComponentContainer'>
        {upgradeData?.map((upgrade) => (
          <UpgradeComponent key={upgrade.id} upgrade={upgrade} />
        ))}
      </div>
    </div>
  );
};

export default UpgradeContainer;
