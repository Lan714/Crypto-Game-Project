const { model, Schema, SchemaTypes } = require('mongoose')

const Crypto = new Schema({
	cash_balance: String,
	crypto_balance: [{
		crypto_name: String,
		amount: String
	}],
	profit: String,
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
})

module.exports = model('Crypto', Crypto)