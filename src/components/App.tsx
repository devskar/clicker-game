import React from 'react';
import IncomeDisplay from './IncomeDisplay';
import ItemContainer from './ItemContainer';
import MoneyButton from './MoneyButton';
import UpgradeContainer from './UpgradeContainer';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div id='main'>
      <ItemContainer />
      <IncomeDisplay />
      <MoneyButton />
      <UpgradeContainer />
    </div>
  );
};

export default App;
