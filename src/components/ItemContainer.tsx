import React from 'react';

interface Props {}

const divStyle: React.CSSProperties = {
  backgroundColor: 'red',
};

const ItemContainer: React.FC<Props> = () => {
  return (
    <div id='itemContainer' style={divStyle}>
      <h2>Items</h2>
    </div>
  );
};

export default ItemContainer;
