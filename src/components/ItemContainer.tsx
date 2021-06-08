import { ipcRenderer } from 'electron';
import React, { useEffect, useState } from 'react';
import { IPC_ITEMS_GET_ALL, IPC_ITEMS_UPDATE } from '../const';
import Item from '../entities/Item';

interface Props {}

const divStyle: React.CSSProperties = {
  backgroundColor: 'red',
};

const ItemContainer: React.FC<Props> = () => {
  const [itemData, setItemData] = useState<Item[]>();
  const [itemElements, setItemElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
    ipcRenderer.on(IPC_ITEMS_UPDATE, (_, updatedItemData: Item[]) => {
      setItemData(updatedItemData);
    });

    ipcRenderer.send(IPC_ITEMS_GET_ALL);
  }, []);

  return (
    <div id='itemContainer' style={divStyle}>
      <h2>Items</h2>
      {itemData?.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default ItemContainer;
