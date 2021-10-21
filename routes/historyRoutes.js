const router = require('express').Router()
const { History, User, Transaction, Crypto } = require('../models')
const passport = require('passport')


router.get('/history/max', passport.authenticate('jwt'), (req, res) => {
	let result = []
	for (let i = 0; i < req.user.historys.length; i++) {
		result.push(req.user.historys[i].weekNumber)
	}
	res.json(result)
})


router.get('/history/:num', passport.authenticate('jwt'), (req, res) => {
	History.find({ weekNumber: req.params.num, user: req.user._id })
		.then(history => res.json(history))
})


router.post('/history', passport.authenticate('jwt'), async function (req, res) {

	const currentdate = new Date()
	var oneJan = new Date(currentdate.getFullYear(), 0, 1)
	var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000))
	var ingame_weeknumber = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7)

	const history = await History.create({ weekNumber: ingame_weeknumber, cash_balance: 1000, profit: 0, username: req.user.username, user: req.user._id })

	await User.findByIdAndUpdate(req.user._id, { $push: { historys: history._id } })
		.then(data => res.json({
			user: data,
			history: history,
			message: "Success!"
		}))
		.catch(err => res.json({
			err: err,
			message: "unable to post history"
		}))

})



router.put('/history/transaction/', passport.authenticate('jwt'), async function (req, res) {
	const currentdate = new Date()
	var oneJan = new Date(currentdate.getFullYear(), 0, 1)
	var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000))
	var ingame_weeknumber = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7)

	let historys = req.user.historys
	let last_index = req.user.historys.length - 1

	const transaction = await Transaction.create({ ...req.body, date: currentdate, history: historys[last_index]._id })

	let dollar_value = 0
	let crypto_name = req.body.crypto_name
	if (req.body.side === 'sell') {
		dollar_value -= req.body.total
	}
	else {
		dollar_value += req.body.total
	}

	console.log(dollar_value)
	console.log(crypto_name)
	console.log('Adding Transaction into History')

	// const crypto = await Crypto.create({ crypto_name: crypto_name, dollar_value: dollar_value, history: historys[last_index]._id })

	// console.log('crypto created')

	await History.findByIdAndUpdate(historys[last_index]._id, { $push: { transactions: transaction } })
		.then(data => {
			res.json({
				history: data,
				transaction: transaction,
				message: 'success'
			})
		})
		.catch(err => res.json({
			err: err,
			message: "unable to push transaction"
		}))
	res.sendStatus(200)
})

router.put('/history/:id', passport.authenticate('jwt'), async function (req, res) {
	await History.findByIdAndUpdate(req.params.id, req.body)
		.then(data => console.log(data))
		.catch(err => console.log(err))
	res.sendStatus(200)
})

router.get('/history/transaction/:id', passport.authenticate('jwt'), (req, res) => {

	let historys = req.user.historys
	let last_index = req.user.historys.length - 1

	console.log(historys)

	Transaction.find({ history: historys[last_index]._id })
		.then(data => {
			res.json(data)
		})
})


router.delete('/history/:id', passport.authenticate('jwt'), async function (req, res) {
	await History.findByIdAndDelete(req.params.id)
	await User.findByIdAndUpdate(req.user._id, { $pull: { historys: req.params.id } })
	res.sendStatus(200)
})

module.exports = router