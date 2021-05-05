import React from 'react';
import Tour from './Tour';

const Tours = ({props,removeItem}) => {
  console.log("toursss",removeItem)
  return (
    <div>
      <h3>Our Tours</h3>
      {
        props.map((tour)=>(
          <Tour key={tour.id} tour={tour} removeItem={removeItem}/>
        ))
      }
    </div>
  )
}

export default Tours
