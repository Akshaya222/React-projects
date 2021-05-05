import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({value,index}) => {
  console.log("index",index)
  const [alert,setAlert]=useState(false);
  var color=`#${value.hex}`;

  useEffect(()=>{
     const timeout='';
       if(alert){
       timeout= setTimeout(()=>setAlert(false),3000);
       }
       return ()=>clearTimeout(timeout);
  },[alert])

  const clickHandler=()=>{
    setAlert(true);
    navigator.clipboard.writeText(`#${value.hex}`);
  }
  return (
    <div  onClick={clickHandler} style={{height:'200px',width:'200px',background:`#${value.hex}`}} className={`color ${index > 10 && 'color-light'}`}>
      <h3>{`${value.weight}%`}</h3>
      <p>{color}</p>
      {
        alert?<h5>copied to clipboard</h5>:null
      }
    </div>
  )
}

export default SingleColor
