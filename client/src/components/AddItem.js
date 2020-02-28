import React, { useState, useContext } from 'react'
import axios from 'axios';

import Context from '../context/Context';

const AddItem = () => {
  const { setAddedNew } = useContext(Context)
  
  const [text, setText] = useState('test text')
  
  const onChange = e => {
    setText(e.target.value)
  }

  const onAdd = () => {
    if(text !== '') {
      axios.post('/api/items/add', {
        name: text
      })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

      // setText('')

      setAddedNew()
    }
  }
  
  return (
    <div className="add-item-container">
      <input type="text" placeholder="add item ..." value={text} onChange={onChange} />
      <button onClick={onAdd}>
        Add
      </button>
    </div>
  )
}

export default AddItem
