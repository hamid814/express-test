const express = require('express')
const bodyParser = require('body-parser')
const shortid = require('shortid')

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

const badWords = ['fuck', 'bitch', 'dick']

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/items', (req, res) => {
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
  items.push({id: items.length + 1, name: req.body.name})
  
  if(badWords.indexOf(req.body.name) === -1) {
    const newItem = {id: items.length + 1, name: req.body.name}
    
    res.send(200, newItem)
  } else {
    res.send(500, { error: "hi, there was an error" });
  }
})

app.listen(5000, () => console.log('server running on port 5000'))