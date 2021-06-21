import { ipcRenderer } from 'electron';
import React from 'react';
import { IPC_ITEM_UPGRADE } from '../const';
import Item from '../entities/Item';
import ItemManager from '../manager/ItemManager';

interface Props {
  item: Item;
}

const ItemComponent: React.FC<Props> = ({ item }) => {
  return (
    <div
      onClick={() => {
        ipcRenderer.send(IPC_ITEM_UPGRADE, item.id);
      }}
      className='itemComponent component'
    >
      <p>{item.name}</p>
      <p className='itemDescription main-font'>{item.description}</p>
      <div className='itemStats'>
        <div className='itemLevel itemStat'>
          <span className='key'>level: </span>
          <span className='value main-font'>{item.currentLevel}</span>
        </div>
        <div className='itemCosts itemStat'>
          <span className='key'>costs: </span>
          <span className='value main-font'>
            {ItemManager.getItemPrice(item)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemComponent;
