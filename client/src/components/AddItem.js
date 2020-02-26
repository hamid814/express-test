import React, { useState } from 'react'
import axios from 'axios';

const AddItem = () => {
  const [text, setText] = useState('test text')
  
  const onChange = e => {
    setText(e.target.value)
  }

  const onAdd = () => {
    axios.post('/api/items/add', {
      name: text
    })
      .then(res => console.log(res.data))
  }
  
  return (
    <div className="add-item-container">
      <input type="text" placeholder="add item ..." value={text} onChange={onChange} />
      <button onClick={onAdd}>
        add
      </button>
    </div>
  )
}

export default AddItem
