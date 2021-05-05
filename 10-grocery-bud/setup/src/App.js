import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [item,setItem]=useState('');
  const [list,setList]=useState(JSON.parse(localStorage.getItem("list")));
  const [edit,setEdit]=useState(false);
  const [editId,setEditId]=useState(null);
  const [alert,setAlert]=useState({
    isalert:false,message:'',type:''
  })

  useEffect(()=>{
    var timeset='';
    if(alert.isalert){
      setTimeout(()=>setAlert({isalert:false}),3000)
    }
    return ()=>clearTimeout(timeset);
  },[alert])

  useEffect(()=>{
    localStorage.setItem("list",JSON.stringify(list));
  },[list])

  const editItem=(id)=>{
    setEditId(id);
    setEdit(true);
    const element=list.find((item)=>item.id==id)
    setItem(element.title);
  }

  const deleteAll=()=>{
    if(list.length<1){
      setAlert({
        isalert:true,message:'Nothing to delete',type:'danger'
      })
    }
    else{
      setList([]);
      setAlert({
        isalert:true,message:'Everything deleted',type:'danger'
      })
    }
  }

  const deleteItem=(id)=>{
      const newThing=list.filter((set)=>set.id!==id);
      setList(newThing);
      setAlert({
        isalert:true,message:'Successfully deleted',type:'danger'
      })
  }

 const submitHandler=(e)=>{
  e.preventDefault()
   if(!item){
    setAlert({
      isalert:true,message:'Please Enter a value',type:'danger'
    })
   }
  else{
  
    if(!edit){
      setItem('');
      var newItem={
        id:new Date().getTime(),title:item
      }
      setList([...list,newItem])
      setAlert({
        isalert:true,message:'Added Successfully',type:'success'
      }) 
    }
    else{
      setList(
        list.map((name)=>{
          if(name.id==editId){
             return {...name,title:item}
          }
          else{
            return name;
          }
        })
      )
      setAlert({
        isalert:true,message:'Changed Successfully',type:'success'
      });
      setEdit(false)
    }
  } 
 }

  return (
    <div className="boxContainer">
      <div className="boxItem">
        {alert && <h4>{alert.message}</h4>}
       
        <form onSubmit={submitHandler}>
          <input type="text" value={item} onChange={(e)=>setItem(e.target.value)}></input>
          <button>{edit?'edit':'submit'}</button>
          {
               list?
                list.map((item,index)=>(
                  <List item={item}  key={index} editItem={editItem} deleteItem={deleteItem}/>
                ))
              :null
          }
        </form>
         <button onClick={deleteAll} className="btn-clear">Clear All</button>
      </div>
    </div>
  )
}

export default App
