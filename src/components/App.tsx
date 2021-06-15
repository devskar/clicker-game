import React from 'react';
import IncomeDisplay from './IncomeDisplay';
import ItemContainer from './ItemContainer';
import MainButton from './MainButton';
import UpgradeContainer from './UpgradeContainer';
import CurrentFollowerDisplay from './CurrentFollowerDisplay';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div id='main'>
      <ItemContainer />
      <IncomeDisplay />
      <CurrentFollowerDisplay />
      <MainButton />
      <UpgradeContainer />
    </div>
  );
};

export default App;
