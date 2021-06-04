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
      <p>Test</p>
    </div>
  );
};

export default IncomeDisplay;
