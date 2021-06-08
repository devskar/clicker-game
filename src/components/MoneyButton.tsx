import React, { useEffect, useState } from 'react';
import { ipcRenderer } from 'electron';
import { IPC_MONEY_GET, IPC_MONEY_UPDATE } from '../const';

interface Props {}

const divStyle: React.CSSProperties = {
  backgroundColor: 'silver',
};

const buttonStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
};

const MoneyButton: React.FC<Props> = () => {
  const [moneyAmount, setMoneyAmount] = useState(0);

  useEffect(() => {
    ipcRenderer.on(IPC_MONEY_UPDATE, (_, amount: number) => {
      setMoneyAmount(amount);
    });

    ipcRenderer.send(IPC_MONEY_GET);
  }, []);

  return (
    <div style={divStyle} id='moneyButton'>
      <button
        onClick={() => {
          ipcRenderer.send('money-button:clicked');
        }}
        style={buttonStyle}
      >
        {moneyAmount}
      </button>
    </div>
  );
};

export default MoneyButton;
