const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const { TossModel } = require('../database/models.js');

mongoose.connect('mongodb://localhost:27017/mvp')

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json());

app.get('/recentTosses', async function (req, res) {
  let tosses = await TossModel.find({}).sort({date:-1})
  if (tosses === null || tosses === undefined) {
    console.log("get error")

    res.status(404).json({ message: "no tosses found" })
  } else {
    res.status(200).json(tosses)
  }
})

app.post('/Toss', async function (req, res) {
  let now = new Date();
  let toss =  {
    name: 'Chris',
    identifier: 'test',
    date: now,
    call: req.body.call,
    landed: req.body.result,
    stake: req.body.stakes,
    settled: req.body.settled
  };

  await TossModel.create(toss);
  res.status(200).json(toss)

})

app.put('/settle', async function (req, res) {
 let setBol = await TossModel.findOneAndUpdate({_id: req.body.id}, {settled:req.body.bol});

  if (setBol === null || setBol === undefined) {
    console.log("put error for settle route")

    res.status(404).json({ message: "put request failed" })
  } else {
    console.log(setBol)
    res.status(200).json(setBol)
  }
})

app.delete('/delete', async function (req, res) {
  let delDoc = await TossModel.deleteOne({_id: req.body.id});

   if (delDoc === null || delDoc === undefined) {
     console.log("put error for settle route")

     res.status(404).json({ message: "put request failed" })
   } else {
     res.status(200).json(delDoc)
   }
 })

app.listen(3000);
console.log('Listening from server on port 3000');