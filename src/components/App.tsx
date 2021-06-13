import React from 'react';
import IncomeDisplay from './IncomeDisplay';
import ItemContainer from './ItemContainer';
import FollowerButton from './FollowerButton';
import UpgradeContainer from './UpgradeContainer';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div id='main'>
      <ItemContainer />
      <IncomeDisplay />
      <FollowerButton />
      <UpgradeContainer />
    </div>
  );
};

export default App;
