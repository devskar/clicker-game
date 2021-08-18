import { ipcRenderer } from 'electron';
import React, { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  IPC_LANGUAGE_CHANGE,
  IPC_SETTINGSWINDOW_OPEN,
  IPC_USER_BACKGROUNDVOLUME_CHANGE,
  IPC_SETTINGS_BACKGROUNDVOLUME_GET,
  IPC_BACKGROUNDVOLUME_REPLY,
  LANGUAGES_MAP,
  CSS_HIGHLIGHT_COLOR_VARIABLE,
  CSS_HIGHLIGHT_EXAMPLE_COLORS,
} from '../const';
import HighlightColorPicker from './settings/HighlightColorPicker';
import LanguageSelector from './settings/LanguageSelector';
import MusicVolumeInput from './settings/MusicVolumeInput';

interface Props {}

const SettingsWindow: React.FC<Props> = () => {
  // WINDOW
  const [shown, setShown] = useState(true);

  useEffect(() => {
    ipcRenderer.on(IPC_SETTINGSWINDOW_OPEN, () => {
      setShown(true);
    });
  }, []);

  // COLOR STUFF

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
