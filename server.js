const express = require('express')
const bodyParser = require('body-parser')
const shortid = require('shortid')

const app = express();

const items = [
  {
    id: shortid.generate(),
    name: 'chick'
  },
  {
    id: shortid.generate(),
    name: 'paper'
  },
  {
    id: shortid.generate(),
    name: 'tissue'
  },
  {
    id: shortid.generate(),
    name: 'moblie'
  },
  {
    id: shortid.generate(),
    name: 'carpet'
  }
]

const badWords = ['fuck', 'bitch', 'dick', 'cunt', 'asshole']

app.use(express.json())

app.get('/api/items', (req, res) => {
  res.send(items)
})

app.get('/api/items/:id', (req, res) => {
  let msg;
  
  if(items.map(i => i.id).indexOf(req.params.id) !== -1) {
    msg = items.filter(i => i.id == req.params.id)[0]
  } else {
    msg = {
      type: 'error',
      massage: 'the id you requested is wrong'
    }
  }

  res.send(msg)
})

app.post('/api/items/add', (req, res) => {
  const newItem = {
    id: shortid.generate(),
    name: req.body.name
  }
  
  items.push(newItem)
  
  if(badWords.indexOf(req.body.name) === -1) {
    res.send(200, newItem)
  } else {
    res.send(400, 'there was an error')
  }
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`))