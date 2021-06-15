import React, { useEffect, useState } from 'react';
import { ipcRenderer } from 'electron';
import { IPC_FOLLOWER_GET, IPC_FOLLOWER_UPDATE } from '../const';
import image from '../../assets/images/skate-btn-img.png';

interface Props {}

const divStyle: React.CSSProperties = {
  position: 'relative',
  textAlign: 'center',
  overflow: 'hidden',
  // position: 'relative',
  // text-align: 'center',
  // color: 'white',
  // overflow: 'hidden',
};

const buttonStyle: React.CSSProperties = {
  width: '180px',
  height: '180px',
};

const tagStyle: React.CSSProperties = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-40%, -50%)',
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
    <div style={divStyle} id='followerButton' className='non-selectable'>
      <img
        src={image}
        alt='skateboard'
        onClick={() => {
          ipcRenderer.send('follower-button:clicked');
        }}
        style={buttonStyle}
      ></img>
      <p style={tagStyle}>{followerAmount}</p>
    </div>
  );
};

export default FollowerButton;
