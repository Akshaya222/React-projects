import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  console.log(data);
  return(<div>
    <h2>accordion project setup</h2>
    {
    data.map((question)=>(
        <SingleQuestion key={question.id} question={question}/> 
    ))
    }
  </div>);
}

export default App;
