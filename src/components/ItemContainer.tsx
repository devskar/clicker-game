import { ipcRenderer } from 'electron';
import React, { useEffect, useState } from 'react';
import { IPC_ITEMS_GET_ALL, IPC_ITEMS_UPDATE } from '../const';
import Item from '../entities/Item';
import ItemComponent from './ItemComponent';

interface Props {}

const ItemContainer: React.FC<Props> = () => {
  const [itemData, setItemData] = useState<Item[]>();

  useEffect(() => {
    ipcRenderer.on(IPC_ITEMS_UPDATE, (_, updatedItemData: Item[]) => {
      setItemData(updatedItemData);
    });

    ipcRenderer.send(IPC_ITEMS_GET_ALL);
  }, []);

  return (
    <div id='itemContainer' className='non-selectable scrollable'>
      <h2 className='main-font containerHeading'>Items</h2>
      <div>
        {itemData?.map((item) => (
          <ItemComponent key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemContainer;
