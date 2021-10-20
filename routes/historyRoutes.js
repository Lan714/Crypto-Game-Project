const router = require('express').Router()
const { History, User } = require('../models')
const passport = require('passport')

router.get('/history/max', passport.authenticate('jwt'), (req, res) => {
	let result = []
	for (let i = 0; i < req.user.historys.length; i++) {
		result.push(req.user.historys[i].weekNumber)
	}
	res.json(result)
})

router.post('/history', passport.authenticate('jwt'), async function (req, res) {
	const history = await History.create({ ...req.body, username: req.user.username, user: req.user._id })
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

	console.log(req.user.username)
})

router.put('/history/:id', passport.authenticate('jwt'), async function (req, res) {
	await History.findByIdAndUpdate(req.params.id, req.body)
		.then(data => console.log(data))
		.catch(err => console.log(err))
	res.sendStatus(200)
})



router.delete('/history/:id', passport.authenticate('jwt'), async function (req, res) {
	await History.findByIdAndDelete(req.params.id)
	await User.findByIdAndUpdate(req.user._id, { $pull: { historys: req.params.id } })
	res.sendStatus(200)
})

module.exports = router