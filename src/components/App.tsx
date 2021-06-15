import React from 'react';
import IncomeDisplay from './IncomeDisplay';
import ItemContainer from './ItemContainer';
import MainButton from './MainButton';
import UpgradeContainer from './UpgradeContainer';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div id='main'>
      <ItemContainer />
      <IncomeDisplay />
      <MainButton />
      <UpgradeContainer />
    </div>
  );
};

export default App;
