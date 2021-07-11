import { ipcRenderer } from 'electron';
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { IPC_INCOME_UPDATE } from '../const';

interface Props {}

const divStyle: React.CSSProperties = {
  overflow: 'hidden',
  padding: '0.3rem',
};

const tagStyle: React.CSSProperties = {
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const IncomeDisplay: React.FC<Props> = () => {
  const [income, setIncome] = useState(0);

  useEffect(() => {
    ipcRenderer.on(IPC_INCOME_UPDATE, (_, updatedIncome: number) => {
      setIncome(updatedIncome);
    });
  }, []);

  return (
    <div
      style={divStyle}
      id='incomeDisplay'
      className='non-selectable main-font'
    >
      <h1 style={tagStyle}>{income}</h1>
      <p>
        <FormattedMessage id='income.text' />
      </p>
    </div>
  );
};

export default IncomeDisplay;
