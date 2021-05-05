import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const Job = ({data,duties}) => {
   

    return (
        <div>
           <h2>{data.title}</h2>
           <button>{data.company}</button> 
           <h4>{data.dates}</h4>
           {
               duties.map((item,index)=>(
                   <div key={index}>
                       <FaAngleDoubleRight/>
                       <p>{item}</p>
                    </div>
               ))
           }
        </div>
    )
}

export default Job
