import { ipcRenderer } from 'electron';
import React, { useEffect, useState } from 'react';
import { IPC_FOLLOWER_GET, IPC_FOLLOWER_UPDATE } from '../const';

interface Props {}

const divStyle: React.CSSProperties = {
  textAlign: 'center',
};

const tagStyle: React.CSSProperties = {
  fontFamily: 'Balsamiq Sans',
};

const CurrentFollowerDisplay: React.FC<Props> = () => {
  const [followerAmount, setFollowerAmount] = useState(0);

  useEffect(() => {
    ipcRenderer.on(IPC_FOLLOWER_UPDATE, (_, amount: number) => {
      setFollowerAmount(amount);
    });

    ipcRenderer.send(IPC_FOLLOWER_GET);
  }, []);

  return (
    <div style={divStyle} id='currentFollowerDisplay'>
      <p style={tagStyle}>{followerAmount}</p>
    </div>
  );
};

export default CurrentFollowerDisplay;
