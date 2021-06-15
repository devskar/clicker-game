import React, { useRef } from 'react';
import { ipcRenderer } from 'electron';
import { IPC_MAIN_BUTTON_CLICKED } from '../const';
import image from '../../assets/images/main.svg';
import '../styles/animations.css';

interface Props {}

const divStyle: React.CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
};

const buttonStyle: React.CSSProperties = {
  maxWidth: '100%',
  maxHeight: '95%',
  position: 'absolute',
  bottom: 0,
};

const MainButton: React.FC<Props> = () => {
  const divRef = useRef<HTMLImageElement>(null);

  return (
    <div style={divStyle} id='mainButton' className='non-selectable'>
      <img
        ref={divRef}
        src={image}
        id='mainImage'
        alt='skateboard'
        onClick={() => {
          ipcRenderer.send(IPC_MAIN_BUTTON_CLICKED);
        }}
        style={buttonStyle}
      ></img>
    </div>
  );
};

export default MainButton;
