import { useState } from 'react'
import HistoryAPI from '../../utils/HistoryAPI/HistoryAPI'
import Form from 'react-bootstrap/Form'
import { Container, Card, CardGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import './LimitBox.css'

const LimitBox = () => {
	const crypto_name = "TESTING"
	const real_time_price = 200.0

	const [priceState, setPriceState] = useState({
		real_time_price: real_time_price,
		sell_amount: 0.0,
		buy_amout: 0.0
	})


	const handleInputChange = ({ target: { name, value } }) => setPriceState({ ...priceState, [name]: value })

	const handleSell = event => {
		event.preventDefault()

		if (priceState.sell_amount === 0.0 || priceState.sell_amount === 0) {
			alert('Put Amount!')
		}
		else {
			let body = {
				"crypto_name": crypto_name,
				"side": "sell",
				"price": real_time_price,
				"amount": priceState.sell_amount
			}

			HistoryAPI.pushTransaction(body)
				.then(data => {
					alert('Selling Transaction success!')
					setPriceState({
						...priceState, real_time_price: real_time_price,
						sell_amount: 0.0,
						buy_amout: 0.0
					})
				})
				.catch(err => console.log(err))
		}
	}

	const handleBuy = event => {
		event.preventDefault()

		if (priceState.buy_amout === 0.0 || priceState.buy_amout === 0) {
			alert('Put Amount!')
		}
		else {
			let body = {
				"crypto_name": crypto_name,
				"side": "buy",
				"price": real_time_price,
				"amount": priceState.buy_amout
			}

			HistoryAPI.pushTransaction(body)
				.then(data => {
					alert(`Buying Transaction success!`)
					setPriceState({
						...priceState, real_time_price: real_time_price,
						sell_amount: 0.0,
						buy_amout: 0.0
					})
				})
				.catch(err => console.log(err))
		}

	}

	return (
		<Container>
			<CardGroup>
				<Card style={{ width: '18rem' }}>
					<Card.Body>
						<Form.Group className="mb-3 c" controlId="real-time-price">
							<Form.Label column sm="2">
								Price
							</Form.Label>
							<Form.Control
								type="text"
								placeholder="Real time price"
								name="price"
								value={priceState.real_time_price}
								onChange={handleInputChange} />
						</Form.Group>
						<Form.Group className="mb-3" controlId="buy_amout">
							<Form.Label column sm="2">
								Amount
							</Form.Label>
							<Form.Control
								type="text"
								placeholder="Amount"
								name="buy_amout"
								value={priceState.buy_amout}
								onChange={handleInputChange} />
						</Form.Group>
						<Form.Group className="mb-3" controlId="total">
							<Form.Label column sm="2">
								Total
							</Form.Label>
							<Form.Control
								type="text"
								placeholder="Total"
								name="total"
								value={priceState.buy_amout * real_time_price} />
						</Form.Group>
						<Button
							variant="warning"
							onClick={handleBuy}>
							Buy</Button>
					</Card.Body>
				</Card>
				<Card style={{ width: '18rem' }}>
					<Card.Body>
						<Form.Group className="mb-3 c" controlId="real-time-price">
							<Form.Label column sm="2">
								Price
							</Form.Label>
							<Form.Control
								type="text"
								placeholder="Real time price"
								name="price"
								value={priceState.real_time_price}
								onChange={handleInputChange} />
						</Form.Group>
						<Form.Group className="mb-3" controlId="sell_amount">
							<Form.Label column sm="2">
								Amount
							</Form.Label>
							<Form.Control
								type="text"
								placeholder="Amount"
								name="sell_amount"
								value={priceState.sell_amount}
								onChange={handleInputChange} />
						</Form.Group>
						<Form.Group className="mb-3" controlId="total">
							<Form.Label column sm="2">
								Total
							</Form.Label>
							<Form.Control
								type="text"
								placeholder="Total"
								name="total"
								value={priceState.sell_amount * real_time_price} />
						</Form.Group>
						<Button
							variant="warning"
							onClick={handleSell}>
							Sell</Button>
					</Card.Body>
				</Card>
			</CardGroup>
		</Container>
	)
}

export default LimitBox