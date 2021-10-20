const { model, Schema } = require('mongoose')

const History = new Schema({
  weekNumber: Number,
  cash_balance: Number,
  crypto_balance: [{
    crypto_name: String,
    dollar_value: Number
  }],
  transaction: [{
    date: String,
    crypto_name: String,
    side: String,
    price: Number,
    amount: Number,
    total: Number
  }],
  profit: Number,
  username: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = model('History', History)

