import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import UserAPI from '../../utils/UserAPI'
import HistoryAPI from '../../utils/HistoryAPI/HistoryAPI'
import Form from 'react-bootstrap/Form'
import { Container, Card, CardGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Ingame_weekNumber from '../Ingame_weekNumber'
import './LimitBox.css'

const RegisterForm = () => {
	const history = useHistory()

	const [priceState, setPriceState] = useState({
		real_time_price: '',
		amount: ''
	})


	const handleInputChange = ({ target: { name, value } }) => setPriceState({ ...priceState, [name]: value })

	const handleSell = () => {
		alert('sell clicked')
	}

	const handleBuy = event => {
		event.preventDefault()
		alert(`ingame_weeknum: ${Ingame_weekNumber().ingame_weeknumber} buy clicked!`)
		HistoryAPI.pushTransaction()
			.then(data => console.log(data))
			.catch(err => console.log(err))

	}

	return (
		<Container>
			<CardGroup>
				<Card style={{ width: '18rem' }}>
					<Card.Body>
						<Form.Group className="mb-3 c" controlId="real-time-price">
							<Form.Control
								type="text"
								placeholder="Real time price"
								name="price"
								value={priceState.real_time_price}
								onChange={handleInputChange} />
						</Form.Group>
						<Form.Group className="mb-3" controlId="amount">
							<Form.Control
								type="text"
								placeholder="Amount"
								name="amount"
								value={priceState.amount}
								onChange={handleInputChange} />
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
							<Form.Control
								type="text"
								placeholder="Real time price"
								name="price"
								value={priceState.real_time_price}
								onChange={handleInputChange} />
						</Form.Group>
						<Form.Group className="mb-3" controlId="amount">
							<Form.Control
								type="text"
								placeholder="Amount"
								name="amount"
								value={priceState.amount}
								onChange={handleInputChange} />
						</Form.Group>
						<Button
							variant="warning"
							onClick={handleSell}>
							sell</Button>
					</Card.Body>
				</Card>
			</CardGroup>
		</Container>
	)
}

export default RegisterForm