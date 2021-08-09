import React, { useEffect, useState } from 'react';
import IncomeDisplay from './IncomeDisplay';
import ItemContainer from './ItemContainer';
import MainButton from './MainButton';
import UpgradeContainer from './UpgradeContainer';
import CurrentFollowerDisplay from './CurrentFollowerDisplay';

import { IntlProvider, useIntl } from 'react-intl';
import { ipcRenderer } from 'electron';
import { Language, LANGUAGES_MAP } from '../const';
import OptionsContainer from './OptionsContainer';
import SettingsWindow from './SettingsWindow';

interface Props {}

const App: React.FC<Props> = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  return (
    <div id='main'>
      <ItemContainer />
      <IncomeDisplay />
      <SettingsWindow />
      <CurrentFollowerDisplay />
      <MainButton />
      <UpgradeContainer />
      <OptionsContainer />
    </div>
  );
};

export default App;
