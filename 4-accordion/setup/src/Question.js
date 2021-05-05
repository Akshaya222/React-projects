import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({question}) => {
  const [show,setShow]=useState(false);
  const [showOther,setShowOther]=useState(true);


   const plusHandler=()=>{
      setShow(true);
      setShowOther(false);
   }
   const minusHandler=()=>{
     setShow(false);
     setShowOther(true);
   }
  console.log(question);
  return (
    <div>
     <h4>{question.title}</h4>
     {
       !show? <button onClick={plusHandler} style={{background:'green',fontSize:'18px'}}>+</button>:''
     }
   {
     show?<div>
        <button onClick={minusHandler} style={{background:'red',fontSize:'18px'}}>-</button>
     <h6>{question.info}</h6>
     </div>:''
   }
    </div>
  );
};

export default Question;
