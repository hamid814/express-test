import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';

import Item from './Item';

import Context from '../context/Context';

const Items = () => {
  const { addedNew } = useContext(Context)
  
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get('/api/items')
      .then(res => {
        setItems(res.data)
      })
      .catch(err => console.log(err))

  }, [addedNew])
  
  return (
    <div className="items-container">
        {
          items.map((item, index) => (
            <Item key={item.id} item={item} index={index} />
          ))
        }
      </div>
  )
}

export default Items
