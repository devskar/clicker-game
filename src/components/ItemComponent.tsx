import { ipcRenderer } from 'electron';
import React from 'react';
import { IPC_ITEM_UPGRADE } from '../const';
import Item from '../entities/Item';
import ItemManager from '../manager/ItemManager';

interface Props {
  item: Item;
}

const divStyle: React.CSSProperties = {
  border: '1px solid black',
  padding: '0.3rem',
};

const ItemComponent: React.FC<Props> = ({ item }) => {
  return (
    <div
      onClick={() => {
        ipcRenderer.send(IPC_ITEM_UPGRADE, item.id);
      }}
      style={divStyle}
    >
      <p>{item.name}</p>
      <p className='main-font'>{item.description}</p>
      <p>Level: {item.currentLevel}</p>
      <p>Costs: {ItemManager.getItemPrice(item)}</p>
    </div>
  );
};

export default ItemComponent;
