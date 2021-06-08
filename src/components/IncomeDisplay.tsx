import { ipcRenderer } from 'electron';
import React, { useEffect, useState } from 'react';
import { IPC_MONEY_GET, IPC_MONEY_UPDATE } from '../const';

interface Props {}

const divStyle: React.CSSProperties = {
  backgroundColor: 'purple',
};

const tagStyle: React.CSSProperties = {
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const IncomeDisplay: React.FC<Props> = () => {
  return (
    <div style={divStyle} id='incomeDisplay'>
      <h1 style={tagStyle}>1€/sec</h1>
    </div>
  );
};

export default IncomeDisplay;
