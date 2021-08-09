import { ipcRenderer } from 'electron';
import React, { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  IPC_LANGUAGE_CHANGE,
  IPC_SETTINGSWINDOW_OPEN,
  LANGUAGES_MAP,
} from '../const';

interface Props {}

const SettingsWindow: React.FC<Props> = () => {
  const [shown, setShown] = useState(true);
  const intl = useIntl();
  const [languageDropdownOptions, setLanguageDropdownOptions] = useState(() => {
    const nodes: JSX.Element[] = [];

    Object.entries(LANGUAGES_MAP).forEach((entry, i) => {
      const optionElement = (
        <option
          key={i}
          onSelect={() => handleLanguageChange(entry[0])}
          data-language-name={entry[0]}
        >
          {entry[1]['language.name']}
        </option>
      );

      if (entry[0] == intl.locale) nodes.unshift(optionElement);
      else nodes.push(optionElement);
    });

    return nodes;
  });

  const handleLanguageChange = (event: any) => {
    ipcRenderer.send(
      IPC_LANGUAGE_CHANGE,
      event.target[event.target.options.selectedIndex].dataset.languageName,
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
        <div id='settingGroupsContainer' className='scrollable'>
          <div className='settingsGroup'>
            <label>
              <FormattedMessage id='language' />
            </label>
            <select
              className='settingsSelector main-font'
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
