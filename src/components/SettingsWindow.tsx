import { ipcRenderer } from 'electron';
import React, { useEffect, useState } from 'react';
import {
  IPC_LANGUAGE_CHANGE,
  IPC_SETTINGSWINDOW_OPEN,
  Language,
  LANGUAGES_MAP,
} from '../const';

interface Props {}

const SettingsWindow: React.FC<Props> = () => {
  const [shown, setShown] = useState(true);
  const [languageDropdownOptions, setLanguageDropdownOptions] = useState(() => {
    const nodes: JSX.Element[] = [];

    let i = 0;

    Object.values(LANGUAGES_MAP).forEach((values) => {
      nodes.push(<option key={i}>{values['language.name']}</option>);
      i++;
    });

    return nodes;
  });

  const handleLanguageChange = (event: any) => {
    ipcRenderer.send(IPC_LANGUAGE_CHANGE, event.target.value);
  };

  useEffect(() => {
    ipcRenderer.on(IPC_SETTINGSWINDOW_OPEN, () => {
      setShown(true);
    });
  }, []);

  // useEffect(() => {
  //   ipcRenderer.on(IPC_LANGUAGE_CHANGE, (_, lang: Language) => {
  //     setLanguageDropdownOptions(languageDropdownOptions.remove())
  //   });
  // }, []);

  if (shown) {
    return (
      <div id='settingsWindow' className='window non-selectable main-font'>
        <button id='settingsWindowExitButton' onClick={() => setShown(false)}>
          X
        </button>
        <div id='settingsContainer'>
          <div className='settingsGroup'>
            <label>Language</label>
            <select
              id='settingLanguageSelector'
              className='main-font'
              onChange={handleLanguageChange}
            >
              {languageDropdownOptions}
            </select>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default SettingsWindow;
