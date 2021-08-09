import React, { useEffect, useState } from 'react';
import IncomeDisplay from './IncomeDisplay';
import ItemContainer from './ItemContainer';
import MainButton from './MainButton';
import UpgradeContainer from './UpgradeContainer';
import CurrentFollowerDisplay from './CurrentFollowerDisplay';

import { IntlProvider } from 'react-intl';
import { ipcRenderer } from 'electron';
import { Language, LANGUAGES_MAP } from '../const';
import OptionsContainer from './OptionsContainer';
import SettingsWindow from './SettingsWindow';

interface Props {}

const App: React.FC<Props> = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en-US');

  return (
    <div id='main'>
      <IntlProvider
        locale={currentLanguage}
        messages={LANGUAGES_MAP[currentLanguage]}
      >
        <ItemContainer />
        <IncomeDisplay />
        <SettingsWindow />
        <CurrentFollowerDisplay />
        <MainButton />
        <UpgradeContainer />
        <OptionsContainer />
      </IntlProvider>
    </div>
  );
};

export default App;
