const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json());
app.get('/', function (req, res) {
  res.send('hello world')
})
app.listen(3001);
console.log('Listening from server on port 3001');