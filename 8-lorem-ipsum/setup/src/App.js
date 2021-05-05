import React, { useState } from 'react';
import item from './data';
function App() {
  const [data,setData]=useState([]);
  const [number,setNumber]=useState(0);
  const handleThis=()=>{
    console.log("number",number);
       if(number<=0){
            var slideone=item.slice(0,1);
            console.log("data.....",slideone)
            setData(slideone)
       }
       else if(number>8){
         setData(item);
       }
       else{
         var slideone=item.slice(0,number);
         console.log("data.....",slideone)
         setData(slideone)
       }
  }
  return (
    <div>
      <label>number</label>
      <input  value={number} onChange={(e)=>setNumber(e.target.value)} type="number"/>
      <button onClick={handleThis}>Generate</button>
     
       
          {
             data.map((item)=>(
              <p>{item}</p>
        ))
          }
      
   
    </div>
    )
}

export default App;
