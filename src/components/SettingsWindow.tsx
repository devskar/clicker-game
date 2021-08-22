import { ipcRenderer } from 'electron';
import React, { useEffect, useState } from 'react';
import { IPC_SETTINGSWINDOW_OPEN } from '../const';
import HighlightColorPicker from './settings/HighlightColorPicker';
import LanguageSelector from './settings/LanguageSelector';
import MusicVolumeInput from './settings/MusicVolumeInput';

interface Props {}

const SettingsWindow: React.FC<Props> = () => {
  // WINDOW
  const [shown, setShown] = useState(false);

  useEffect(() => {
    ipcRenderer.on(IPC_SETTINGSWINDOW_OPEN, () => {
      setShown(true);
    });
  }, []);

  // COMPONENT
  if (shown) {
    return (
      <div id='settingsWindow' className='window non-selectable main-font'>
        <button id='settingsWindowExitButton' onClick={() => setShown(false)}>
          X
        </button>
        <div id='settingGroupsContainer' className='scrollable'>
          <LanguageSelector />
          <MusicVolumeInput />
          <HighlightColorPicker />
        </div>
      </div>
    );
  }

  return null;
};

export default SettingsWindow;
