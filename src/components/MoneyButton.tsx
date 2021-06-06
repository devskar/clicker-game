import React from 'react';
import { getItems } from '../items';

interface Props {}

const divStyle: React.CSSProperties = {
  backgroundColor: 'silver',
};

const buttonStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
};

const MoneyButton: React.FC<Props> = () => {
  return (
    <div style={divStyle} id='moneyButton'>
      <button
        onClick={() => {
          console.log(getItems());
        }}
        style={buttonStyle}
      >
        Money
      </button>
    </div>
  );
};

export default MoneyButton;
