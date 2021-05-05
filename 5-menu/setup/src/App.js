import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const category=['all',...new Set(items.map((item)=>item.category))];
  const [data,setData]=useState(items);
  const filterItems=(category)=>{
    if(category=='all'){
        setData(items);
    }
    else{
      const newData=items.filter((item)=>item.category==category);
      setData(newData);
    }
  }
  return (
     <div>
    <Categories filterItems={filterItems} category={category}/>
    <Menu data={data}/>
     </div>
  );
}

export default App;
