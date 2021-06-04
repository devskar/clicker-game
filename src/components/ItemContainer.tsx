import React from 'react';

interface Props {}

const divStyle: React.CSSProperties = {
  backgroundColor: 'red',
};

const ItemContainer: React.FC<Props> = () => {
  return (
    <div id='itemContainer' style={divStyle}>
      ItemContainer
    </div>
  );
};

export default ItemContainer;
