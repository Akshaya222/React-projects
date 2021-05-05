import React from 'react';

const Categories = ({filterItems,category}) => {
  return (
    <div>
      {
        category.map((item,index)=>(
          <button key={index} onClick={()=>filterItems(item)}>{item}</button>
        ))
      }
      
    </div>
  );
};

export default Categories;
