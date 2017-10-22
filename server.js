const express = require('express')
const app = express()

app.use(express.static('public'))

app.listen(5000, (req, res) => {
  console.log('http://localhost:5000')
})
