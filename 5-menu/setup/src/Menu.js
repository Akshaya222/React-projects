import React from 'react';

const Menu = ({data}) => {
  return (
    <div>
      <h2>menu component</h2>
      {
        data.reverse().map((item)=>(
          <h5>{item.title}</h5>
        ))
      }
    </div>
  );
};

export default Menu;
