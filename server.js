const express = require('express')
const shortid = require('shortid')

const app = express();

const items = [
  {
    id: 1,
    name: 'book'
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
  },
]

app.get('/api/items', (req, res) => {
  // res.send(items)
  res.send('items')
})

app.get('/api/items/:id', (req, res) => {
  if() {

  }  

})

app.listen(5000)