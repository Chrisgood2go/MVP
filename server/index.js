const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const { TossModel } = require('../database/models.js');

mongoose.connect('mongodb://localhost:27017/mvp')

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json());

app.get('/recentTosses', async function (req, res) {
  let tosses = await TossModel.find({}).limit(5);
  if (tosses === null || tosses === undefined) {
    console.log("get error")

    res.status(404).json({ message: "no tosses found" })
  } else {
    res.status(200).json(tosses)
  }
})
app.post('/Toss', async function (req, res) {
  let now = new Date();
  let toss =  await TossModel.create({
    name: 'Chris',
    identifier: 'test',
    date: now,
    call: String,
    landed: Boolean,
    stake: String,
    settled: Boolean
  });


    res.status(200).json(toss)

})

// app.get('/recentTosses/:id', function (req, res) {
//   id = req.params.id
//   res.data = ArrayOfTosses()
//   res.send('hello world')
// })

app.listen(3000);
console.log('Listening from server on port 3000');