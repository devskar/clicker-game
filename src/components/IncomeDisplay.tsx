import { ipcRenderer } from 'electron';
import React, { useEffect, useState } from 'react';
import {
  IPC_INCOME_UPDATE,
  IPC_FOLLOWER_GET,
  IPC_FOLLOWER_UPDATE,
} from '../const';

interface Props {}

const divStyle: React.CSSProperties = {
  backgroundColor: 'purple',
  overflow: 'hidden',
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
    <div style={divStyle} id='incomeDisplay' className='nonselectable'>
      <h1 style={tagStyle}>{income}/sec</h1>
    </div>
  );
};

export default IncomeDisplay;
