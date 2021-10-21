import { useState } from 'react'
import UserAPI from '../../utils/UserAPI'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './RegisterForm.css'

const RegisterForm = () => {
	const [userState, setUserState] = useState({
		name: '',
		email: '',
		username: '',
		password: ''
	})


	const handleInputChange = ({ target: { name, value } }) => setUserState({ ...userState, [name]: value })

	const handleRegisterUser = event => {
		event.preventDefault()
		UserAPI.register(userState)
			.then(() => {
				alert('User Registered!')
				setUserState({ ...userState, name: '', email: '', username: '', password: '' })
			})
			.catch(err => console.error(err))
	}

return (
		<Form className="text-center">
			<Form.Group className="mb-3" controlId="name">
				<Form.Label></Form.Label>

				<Form.Control
					type="text"
					placeholder="Enter your name"
					name="name"
					value={userState.name}
					onChange={handleInputChange} />
			</Form.Group>
			<Form.Group className="mb-3" controlId="email">
				<Form.Label></Form.Label>

				<Form.Control
					type="text"
					placeholder="Enter your email"
					name="email"
					value={userState.email}
					onChange={handleInputChange} />
			</Form.Group>
			<Form.Group className="mb-3" controlId="username">

				<Form.Label></Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter your username"
					name="username"
					value={userState.username}
					onChange={handleInputChange} />
			</Form.Group>
			<Form.Group className="mb-3" controlId="password">

				<Form.Label></Form.Label>

				<Form.Control
					type="password"
					placeholder="Enter your password"
					name="password"
					value={userState.password}
					onChange={handleInputChange} />
			</Form.Group>
			<Form.Group className="mb-3" controlId="password">
				<Form.Label></Form.Label>
				<Form.Control
					type="password"
					placeholder="Re-enter your password"
					name="password"
					value={userState.password}
					onChange={handleInputChange} />
			</Form.Group>
			<Button
				variant="warning"

				type="submit"
				onClick={handleRegisterUser} >
				Register
			</Button>
		</Form>
	)
}

export default RegisterForm

