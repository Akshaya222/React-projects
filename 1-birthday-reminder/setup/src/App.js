import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people,setPeople]=useState(data);
  console.log("asddf",data)
  const clearAllHandler=()=>{
     setPeople([]);
  }
  return <main>
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      <List people={people}></List>
      <button onClick={clearAllHandler}>Clear all</button>
    </section>
  </main>;
}

export default App;
