import React, { useEffect, useState } from 'react';
import IncomeDisplay from './IncomeDisplay';
import ItemContainer from './ItemContainer';
import MainButton from './MainButton';
import UpgradeContainer from './UpgradeContainer';
import CurrentFollowerDisplay from './CurrentFollowerDisplay';

import { IntlProvider } from 'react-intl';
import { ipcRenderer } from 'electron';
import {
  DEFAULT_LANGUAGE,
  IPC_LANGUAGE_GET,
  IPC_LANGUAGE_UPDATE,
  Language,
  LANGUAGES_MAP,
} from '../const';
import SettingsContainer from './SettingsContainer';
import SettingsWindow from './SettingsWindow';

interface Props {}

const App: React.FC<Props> = () => {
  const [currentLocale, setCurrentLocale] = useState<Language>(() => {
    return 'en-US';
  });
  const [localeMessages, setLocaleMessages] = useState(
    LANGUAGES_MAP[currentLocale],
  );

  useEffect(() => {
    ipcRenderer.on(IPC_LANGUAGE_UPDATE, (_, locale: Language) => {
      setCurrentLocale(locale);
    });

    ipcRenderer.send(IPC_LANGUAGE_GET);
  }, []);

  useEffect(() => {
    setLocaleMessages(LANGUAGES_MAP[currentLocale]);
  }, [currentLocale]);

  return (
    <div id='main'>
      <IntlProvider locale={currentLocale} messages={localeMessages}>
        <ItemContainer />
        <IncomeDisplay />
        <SettingsWindow />
        <CurrentFollowerDisplay />
        <MainButton />
        <UpgradeContainer />
        <SettingsContainer />
      </IntlProvider>
    </div>
  );
};

export default App;
