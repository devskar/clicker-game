import { ipcRenderer } from 'electron';
import React, { useEffect, useState } from 'react';
import { IPC_UPGRADES_GET_ALL, IPC_UPGRADES_UPDATE } from '../const';
import Upgrade from '../entities/Upgrade';
import UpgradeComponent from './UpgradeComponent';

interface Props {}

const divStyle: React.CSSProperties = {
  backgroundColor: 'green',
};

const tagStyle: React.CSSProperties = {
  padding: '0.3rem',
};

const UpgradeContainer: React.FC<Props> = () => {
  const [upgradeData, setUpgradeData] = useState<Upgrade[]>();

  useEffect(() => {
    ipcRenderer.on(IPC_UPGRADES_UPDATE, (_, updatedItemData: Upgrade[]) => {
      setUpgradeData(updatedItemData);
    });

    ipcRenderer.send(IPC_UPGRADES_GET_ALL);
  }, []);

  return (
    <div id='upgradeContainer' style={divStyle} className='non-selectable'>
      <h2 style={tagStyle} className='main-font'>
        Upgrades
      </h2>
      <div>
        {upgradeData?.map((upgrade) => (
          <UpgradeComponent key={upgrade.id} upgrade={upgrade} />
        ))}
      </div>
    </div>
  );
};

export default UpgradeContainer;
