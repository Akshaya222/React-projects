import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const[color,setColor]=useState();
  const[list,setList]=useState(new Values('#f20a30').all(10));
  const [error,setError]=useState('');
  const handleColor=(e)=>{
    e.preventDefault();
    if(!color){
       setError('Enter a value');
       setList([]);
    }
    else{
      try{
        var trial=new Values(color).all(10);
        setError('');
        setList(trial);
        console.log("trial",trial)
      }
      catch{
          setError("Invalid color");
          setList([]);
      }
    }
  }

  return(
      <div>
        <form onSubmit={handleColor}>
          {error && <h6>{error}</h6>}
          <input type="text" value={color} className={`${error?'error':null}`} placeholder="#f20a30"  onChange={(e)=>setColor(e.target.value)}/>
          <button>submit</button>
          <div style={{display:'flex',flexWrap:'wrap'}}>
          {
            list.map((value,index)=>(
                <SingleColor  value={value} index={index}  key={index}/>
            ))
          }</div>
        </form>
      </div>
  )
}

export default App
