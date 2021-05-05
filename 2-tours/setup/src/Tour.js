import React,{useState} from 'react'

const Tour = ({tour,removeItem}) => {
  const [readmore,setReadmore]=useState(true)
  console.log(tour);
  const readmoreHandler=()=>{
    setReadmore(false);
  }
  const readlessHandler=()=>{
    setReadmore(true);
  }
 
  return (
    <div>
        <img height="400px" src={tour.image}/>
        <h2>{tour.name}</h2>
        <h3>{tour.price}</h3>
        {
          readmore? 
          <div>
             <h6>{(tour.info).slice(0,200)}</h6>
             <span style={{display:'inline'}} onClick={readmoreHandler}>read more</span>
          </div>
         :<div><h6>{tour.info}</h6>
          <span  onClick={readlessHandler}>read less</span></div>
        }
        <button onClick={()=>removeItem(tour.id)}>delete</button>
       
    </div>
  )
}

export default Tour
