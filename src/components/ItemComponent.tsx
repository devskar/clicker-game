import { ipcRenderer } from 'electron';
import React from 'react';
import { IPC_ITEM_UPGRADE } from '../const';

interface Props {
  name: string;
  level: number;
  id: number;
  description: string;
  upgradeCosts: number;
}

const divStyle: React.CSSProperties = {
  border: '1px solid black',
};

const ItemComponent: React.FC<Props> = (props) => {
  return (
    <div
      onClick={() => {
        ipcRenderer.send(IPC_ITEM_UPGRADE, props.id);
      }}
      style={divStyle}
    >
      <p>{props.name}</p>
      <p>{props.description}</p>
      <p>Level: {props.level}</p>
      <p>Costs: {props.upgradeCosts}</p>
    </div>
  );
};

export default ItemComponent;
