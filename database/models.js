const mongoose = require('mongoose');

// GET /products
// GET /products/:product_id
let tossSchema = mongoose.Schema({
  name: String,
  identifier: String,
  date: Date,
  call: String,
  landed: String,
  stake: String,
  settled: Boolean
});


const TossModel = mongoose.model('TossModel', tossSchema);

module.exports = {
  TossModel
}

