import React,{useEffect,useState} from 'react';
import Tours from './Tours';
import axios from 'axios';

const App = () => {
  const [loading,setLoading]=useState(false);
  const [tour,setTour]=useState([]);
  const fetchTours=async()=>{
  //  const response= await fetch('https://course-api.com/react-tours-project');
  //  const data=await response.json();
  //  console.log("data",data)
  setLoading(true);
    await  axios.get('https://course-api.com/react-tours-project').then((res)=>{
      console.log(res.data);
      setTour(res.data);
      setLoading(false);
    }).catch((err)=>{
      console.log(err)
    })

  }

  useEffect(()=>{
     fetchTours();
  },[])

  const removeItem=(id)=>{
    console.log(id);
    const newTours=tour.filter((item)=>(id!==item.id));
    setTour(newTours);
  }
  if(loading){
    return(
      <h2>please wait.....</h2>
    )
  }
  if(tour.length===0){
     return(
      <h2>No tours </h2>
     )
  }
  return (
    <div>
     {
       <Tours props={tour} removeItem={removeItem}/>
     }
    </div>
  )
}

export default App
