import React from 'react';

interface Props {}

const divStyle: React.CSSProperties = {
  backgroundColor: 'green',
};

const UpgradeContainer: React.FC<Props> = () => {
  return (
    <div id='upgradeContainer' style={divStyle} className='non-selectable'>
      UpgradeContainer
    </div>
  );
};

export default UpgradeContainer;
