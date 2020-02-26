import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({ item, index }) => {
  return (
    <div className='item'>
      {index + 1}.
      <Link to={`/item/${item.id}`}>
        {item.name}
      </Link>
    </div>
  )
}

export default Item
