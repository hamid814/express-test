const express = require('express')

const app = express();

app.get('/', (req, res) => {
  res.send('hello from BACKEND')
  console.log('server running')
})

app.listen(5000)