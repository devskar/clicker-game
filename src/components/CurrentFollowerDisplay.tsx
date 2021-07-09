import { ipcRenderer } from 'electron';
import React, { useEffect, useState } from 'react';
import {
  IPC_FOLLOWER_GET,
  IPC_FOLLOWER_UPDATE,
  IPC_LANGUAGE_CHANGE,
} from '../const';

interface Props {}

const divStyle: React.CSSProperties = {
  textAlign: 'center',
};

const tagStyle: React.CSSProperties = {
  fontSize: '2rem',
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
    <div
      id='currentFollowerDisplay'
      className='non-selectable'
      style={divStyle}
      onClick={() => {
        ipcRenderer.send(IPC_LANGUAGE_CHANGE, 'de');
      }}
    >
      <p style={tagStyle} className='main-font'>
        {followerAmount}
      </p>
    </div>
  );
};

export default CurrentFollowerDisplay;
