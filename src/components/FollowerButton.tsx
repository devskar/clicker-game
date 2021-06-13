import React, { useEffect, useState } from 'react';
import { ipcRenderer } from 'electron';
import { IPC_FOLLOWER_GET, IPC_FOLLOWER_UPDATE } from '../const';

interface Props {}

const divStyle: React.CSSProperties = {
  backgroundColor: 'silver',
};

const buttonStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
};

const FollowerButton: React.FC<Props> = () => {
  const [followerAmount, setFollowerAmount] = useState(0);

  useEffect(() => {
    ipcRenderer.on(IPC_FOLLOWER_UPDATE, (_, amount: number) => {
      setFollowerAmount(amount);
    });

    ipcRenderer.send(IPC_FOLLOWER_GET);
  }, []);

  return (
    <div style={divStyle} id='followerButton'>
      <button
        onClick={() => {
          ipcRenderer.send('follower-button:clicked');
        }}
        style={buttonStyle}
      >
        {followerAmount}
      </button>
    </div>
  );
};

export default FollowerButton;
