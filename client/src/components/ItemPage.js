import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const ItemPage = ({ match }) => {
  const [item, setItem] = useState({})
  
  useEffect(() => {
    axios.get(`/api/items/${match.params.id}`)
      .then(res => setItem(res.data))
      .catch(err => console.log(err))
    // eslint-disable-next-line
  }, [])
  
  return (
    <div className="single-item-page-container">
      <div className="item-name">
        {
          item.name
        }
      </div>
      <Link to='/' className="item-back">
        &#129092;
      </Link>
    </div>
  )
}

export default ItemPage
