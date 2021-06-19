import React from 'react';
import Upgrade from '../entities/Upgrade';

interface Props {
  upgrade: Upgrade;
}

const UpgradeComponent: React.FC<Props> = ({ upgrade }) => {
  return <p>{upgrade.name}</p>;
};

export default UpgradeComponent;
