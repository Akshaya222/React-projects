import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import item from './data';
function App() {
  console.log(item)
  const [data,setData]=useState(item);
  var [index,setIndex]=useState(0);
  const changeHandler=()=>{
      if(index==0){
          setIndex(item.length-1)
         }
     else{
      setIndex(index-1);
     }
      console.log("TTTTTTTT",index);
  }
 
  const changeHandler2=()=>{
    if(index==item.length-1){
      setIndex(0);
  }
  else{
    setIndex(index+1);
  }
  console.log("FFFFFFFFFFFFFFFTTTT",index);
  }

  useEffect(()=>{
     setData(item[index]);
     console.log("item",item[index]);
     console.log("IIIIIIIIIIIIIIIIII",index);
  },[index]);

  useEffect(()=>{
    let slider= setInterval(()=>{
      changeHandler2()
    },3000);
    return ()=>clearInterval(slider);
  },[index,data]);

  return (
    <div>
       <h2>{data.title}</h2>
       <img src={data.image} height="120px" width="120px"></img>
       <h4>{data.name}</h4>
       <p>{data.quote}</p>
       <FiChevronLeft onClick={changeHandler}/>
       <FiChevronRight onClick={changeHandler2}/>
    </div>
  );
}

export default App;
