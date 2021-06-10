import { ipcRenderer } from 'electron';
import React, { useEffect, useState } from 'react';
import { IPC_ITEMS_GET_ALL, IPC_ITEMS_UPDATE } from '../const';
import Item from '../entities/Item';
import ItemManager from '../manager/ItemManager';
import ItemComponent from './ItemComponent';

interface Props {}

const divStyle: React.CSSProperties = {
  backgroundColor: 'red',
};

const ItemContainer: React.FC<Props> = () => {
  const [itemData, setItemData] = useState<Item[]>();

  useEffect(() => {
    ipcRenderer.on(IPC_ITEMS_UPDATE, (_, updatedItemData: Item[]) => {
      setItemData(updatedItemData);
    });

    ipcRenderer.send(IPC_ITEMS_GET_ALL);
  }, []);

  return (
    <div id='itemContainer' style={divStyle} className='nonselectable'>
      <h2>Items</h2>
      {itemData?.map((item) => (
        <ItemComponent
          key={item.id}
          description={item.description}
          level={item.currentLevel}
          name={item.name}
          upgradeCosts={ItemManager.getItemPrice(item)}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default ItemContainer;
