import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Item from './Item';

const Items = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get('/api/items')
      .then(res => {
        setItems(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  
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
