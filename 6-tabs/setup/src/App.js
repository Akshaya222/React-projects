import React, { useState, useEffect } from 'react'
import Job from './Job';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const[value,setValue]=useState(1);
  const [data,setData]=useState([]);
  const [duties,setDuties]=useState([]);
  const retriveData=async()=>{
    const response=await fetch(url);
    const data=await response.json();
    setData(data[value-1]);
    setDuties(data[value-1].duties);
    console.log("new data",data[value-1])
}

useEffect(()=>{
   retriveData();
},[value])


  return (
    <div>
      <button  onClick={()=>setValue(1)}  style={{border:(value==1)?'2px solid red':'none',background:'blue',margin:'10px'}}>Tommy</button>
      <button  onClick={()=>setValue(2)} style={{border:(value==2)?'2px solid red':'none',background:'blue',margin:'10px'}}>Bigdrop</button>
      <button  onClick={()=>setValue(3)}  style={{border:(value==3)?'2px solid red':'none',background:'blue',margin:'10px'}}>Cuker</button>
      <Job data={data} duties={duties}/>
    </div>
  )
}

export default App
