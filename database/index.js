const mongoose = require('mongoose');
const TossModel = require('./models.js');

mongoose.connect('mongodb://localhost:27017/mvp')
//POST CREATE
let SaveToss = (ServerPostReqData) => {
let toss = new TossModel(
  {
    name: ServerPostReqData.name ? ServerPosReqData.name : 'random',
    identifier: ServerPostReqData.identifier,
    date: ServerPostReqData.date,
    call: ServerPostReqData.call,
    landed: ServerPostReqData.landed,
    stake: ServerPostReqData.stake,
    settled: ServerPostReqData.settled
  }
  )
  toss.save()
}

  //GET READ tosses
  let ArrayOfTosses =  async (serverGetReqData)=> {
    array = await TossModel.find({identifier: serverGetReqData? serverGetReqData.id : 'random'})

    return array;
  }


module.exports = {SaveToss, ArrayOfTosses}