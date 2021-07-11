import { ipcRenderer } from 'electron';
import React, { useEffect, useState } from 'react';
import { IPC_SETTINGSWINDOW_OPEN } from '../const';

interface Props {}

const SettingsWindow: React.FC<Props> = () => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    ipcRenderer.on(IPC_SETTINGSWINDOW_OPEN, () => {
      setShown(true);
    });
  }, []);
  if (shown) {
    return (
      <div id='settingsWindow' className='window'>
        <button onClick={() => setShown(false)}>X</button>
      </div>
    );
  }

  return null;
};

export default SettingsWindow;
