import { ipcRenderer } from 'electron';
import React from 'react';
import image from '../../assets/images/settings/settings_icon.png';

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
      id='settingsContainer'
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
          onClick={() => {}}
        ></img>
      </div>
    </div>
  );
};

export default SettingsContainer;
