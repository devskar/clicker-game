import React from 'react';

interface Props {}

const divStyle: React.CSSProperties = {
  backgroundColor: 'green',
};

const UpgradeContainer: React.FC<Props> = () => {
  return (
    <div id='upgradeContainer' style={divStyle} className='nonselectable'>
      UpgradeContainer
    </div>
  );
};

export default UpgradeContainer;
