import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({item,deleteItem,editItem}) => {
  console.log(item)
  return (
    <div>
      <h4>{item.title}</h4>
      <FaEdit onClick={()=>editItem(item.id)}/>
      <FaTrash onClick={()=>deleteItem(item.id)} />
    </div>
    
  )
}

export default List
