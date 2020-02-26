const express = require('express')

const app = express();

const items = [
  {
    id: 1,
    name: 'chick'
  },
  {
    id: 2,
    name: 'paper'
  },
  {
    id: 3,
    name: 'tissue'
  },
  {
    id: 4,
    name: 'moblie'
  },
  {
    id: 5,
    name: 'carpet'
  }
]

app.get('/api/items', (req, res) => {
  // request to DB

  res.send(items)
})

app.get('/api/items/:id', (req, res) => {
  let msg;
  
  if(req.params.id <= items.length) {
    msg = items.filter(i => i.id === Number(req.params.id))[0]
  } else {
    msg = {
      type: 'error',
      massage: 'the id you requested is wrong'
    }
  }

  res.send(msg)
})

app.post('/api/items/add', (req, res) => {

})

app.listen(5000, () => console.log('server running on port 5000'))