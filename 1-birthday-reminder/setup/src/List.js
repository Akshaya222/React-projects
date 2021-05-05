import React from 'react';

const List = ({people}) => {
 // props.data.map(item=>console.log(item.id))
  return (
    <>
      {people.map((item)=>{
        const {id,name,age,image}=item;
        return <article key={id} className="person">
          <img src={image}></img>
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
        </article>
      })}
    </>
  );
};

export default List;
