import React from 'react';

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
      <h1 style={tagStyle}>Income</h1>
    </div>
  );
};

export default IncomeDisplay;
