import React from 'react'
import './NewCollections.css'
import new_collection from '../assests/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='new-items'>
      <h1>NEW ITEMS</h1>
      <hr />
      <div className="items">
        {new_collection.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name}  image={item.image} new_price={ item.new_price} old_price={item.old_price}/>
          
        })}
      
      </div>
      
    </div>
  )
}

export default NewCollections