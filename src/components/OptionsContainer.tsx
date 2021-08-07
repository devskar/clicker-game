import { ipcRenderer } from 'electron';
import React from 'react';
import image from '../../assets/images/settings/settings_icon.png';
import { IPC_SETTINGSWINDOW_OPEN } from '../const';

interface Props {}

const divStyle: React.CSSProperties = {
  position: 'relative',
  height: '100%',
  overflow: 'hidden',
};

const buttonStyle: React.CSSProperties = {
  maxHeight: '50%',
  width: 'auto',
  position: 'absolute',
  // bottom: 0,
};

const SettingsContainer: React.FC<Props> = () => {
  return (
    <div
      id='optionsContainer'
      className='non-selectable scrollable'
      style={divStyle}
    >
      <div>
        <img
          src={image}
          id='mainImage'
          alt='skateboard'
          className='non-selectable'
          style={buttonStyle}
          onClick={() => {
            ipcRenderer.send(IPC_SETTINGSWINDOW_OPEN);
          }}
        ></img>
      </div>
    </div>
  );
};

export default SettingsContainer;
