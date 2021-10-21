const { model, Schema, SchemaTypes } = require('mongoose')

const Crypto = new Schema({
	crypto_name: String,
	dollar_value: Number,
	history: {
		type: Schema.Types.ObjectId,
		ref: 'History'
	}
})

module.exports = model('Crypto', Crypto)