import { ipcRenderer } from 'electron';
import React, { SyntheticEvent, useEffect, useState } from 'react';
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

    Object.entries(LANGUAGES_MAP).forEach((entry) => {
      nodes.push(
        <option
          id={entry[0]}
          key={i}
          onSelect={() => handleLanguageChange(entry[0])}
          data-locale-name={entry[0]}
        >
          {entry[1]['language.name']}
        </option>,
      );
      i++;
    });

    return nodes;
  });

  const handleLanguageChange = (event: any) => {
    console.log(
      event.target[event.target.options.selectedIndex].dataset.localeName,
    );
    ipcRenderer.send(
      IPC_LANGUAGE_CHANGE,
      event.target[event.target.options.selectedIndex].dataset.localeName,
    );
  };

  useEffect(() => {
    ipcRenderer.on(IPC_SETTINGSWINDOW_OPEN, () => {
      setShown(true);
    });
  }, []);

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