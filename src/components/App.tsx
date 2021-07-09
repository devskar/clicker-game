import React, { useEffect, useState } from 'react';
import IncomeDisplay from './IncomeDisplay';
import ItemContainer from './ItemContainer';
import MainButton from './MainButton';
import UpgradeContainer from './UpgradeContainer';
import CurrentFollowerDisplay from './CurrentFollowerDisplay';

import { IntlProvider } from 'react-intl';
import { ipcRenderer } from 'electron';
import { IPC_LANGUAGE_GET, IPC_LANGUAGE_UPDATE, LANGUAGES } from '../const';

interface Props {}

const App: React.FC<Props> = () => {
  const [currentLocale, setCurrentLocale] = useState(navigator.language);
  const [localeMessages, setLocaleMessages] = useState(
    LANGUAGES.get(currentLocale) || LANGUAGES.get('en-US'),
  );

  useEffect(() => {
    ipcRenderer.on(IPC_LANGUAGE_UPDATE, (_, locale: string) => {
      setCurrentLocale(locale);
    });

    ipcRenderer.send(IPC_LANGUAGE_GET);
  }, []);

  useEffect(() => {
    setLocaleMessages(LANGUAGES.get(currentLocale)!);
  }, [currentLocale]);

  return (
    <div id='main'>
      <IntlProvider locale={currentLocale} messages={localeMessages}>
        <ItemContainer />
        <IncomeDisplay />
        <CurrentFollowerDisplay />
        <MainButton />
        <UpgradeContainer />
      </IntlProvider>
    </div>
  );
};

export default App;
