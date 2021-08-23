import { ipcRenderer } from 'electron';
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  IPC_BACKGROUNDVOLUME_REPLY,
  IPC_SETTINGS_BACKGROUNDVOLUME_GET,
  IPC_USER_BACKGROUNDVOLUME_CHANGE,
} from '../../const';

interface Props {}

const MusicVolumeInput: React.FC<Props> = () => {
  const [currentVolume, setCurrentVolume] = useState(50);

  useEffect(() => {
    console.log('Registering other listener..');
    ipcRenderer.on(IPC_BACKGROUNDVOLUME_REPLY, (_, volume: number) => {
      setCurrentVolume(volume);
    });

    ipcRenderer.send(IPC_SETTINGS_BACKGROUNDVOLUME_GET);
  }, []);

  const handleBackgroundVolumeChange = (event: any) => {
    setCurrentVolume(+event.target.value);
  };

  useEffect(() => {
    ipcRenderer.send(IPC_USER_BACKGROUNDVOLUME_CHANGE, currentVolume);
  }, [currentVolume]);

  return (
    <div className='settingsGroup'>
      <label>
        <FormattedMessage id='music' /> <FormattedMessage id='volume' />
      </label>
      <div>
        <input
          type='range'
          min='0'
          max='100'
          defaultValue={currentVolume}
          onChange={handleBackgroundVolumeChange}
        />
        {currentVolume}
      </div>
    </div>
  );
};

export default MusicVolumeInput;
