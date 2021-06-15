import React from 'react';

interface Props {}

const divStyle: React.CSSProperties = {
  backgroundColor: 'green',
};

const tagStyle: React.CSSProperties = {
  padding: '0.3rem',
};

const UpgradeContainer: React.FC<Props> = () => {
  return (
    <div id='upgradeContainer' style={divStyle} className='non-selectable'>
      <h2 style={tagStyle} className='main-font'>
        Upgrades
      </h2>
    </div>
  );
};

export default UpgradeContainer;
