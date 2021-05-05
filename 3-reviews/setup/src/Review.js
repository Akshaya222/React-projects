import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  var [index,setIndex]=useState(0);
  console.log(people);

  const handleRandom=()=>{
    const persons=[0,1,2,3];
    const random=Math.floor(Math.random()*people.length)
    setIndex(random);
  }
  const handleLess=()=>{
    if(index===0){
      index=3;
      setIndex(index-1);
    }
    setIndex(index-1);
  }
   
  const {id,image,job,name,text}=people[index];
  return <>
  <article>
    <h2>{job}</h2>
    <img src={image}></img>
    <button onClick={handleLess}>button-1</button>
    <button onClick={()=>setIndex((index+1)%people.length)}>button-2</button>
    <button onClick={handleRandom}>random</button>
  </article>
  
  
  </>;
};

export default Review;
