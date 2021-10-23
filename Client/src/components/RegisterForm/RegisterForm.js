import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import UserAPI from '../../utils/UserAPI'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import './RegisterForm.css'

const RegisterForm = () => {
	const history = useHistory()
	const [userState, setUserState] = useState({
		name: '',
		email: '',
		username: '',
		password: '',
		password2: ''
	})


	const handleInputChange = ({ target: { name, value } }) => setUserState({ ...userState, [name]: value })

	const handleRegisterUser = event => {
		event.preventDefault()

		if (userState.password !== userState.password2) {
			alert(`Password doesn't match!`)
			setUserState({ ...userState, name: '', email: '', username: '', password: '', password2: '' })
			window.location = '/register'
		}
		else {
			UserAPI.register(userState)
				.then(() => {
					alert('User Registered!')
					setUserState({ ...userState, name: '', email: '', username: '', password: '', password2: '' })
					window.location = '/signin'
				})
				.catch(err => console.error(err))
		}
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
					name="password2"
					value={userState.password2}
					onChange={handleInputChange} />
			</Form.Group>
			<ButtonGroup>
				<Button id="register"
					variant="warning"
					type="button">
					<div onClick={() => history.push('/signin')} className="Register">
						<span className="Register">Sign In</span>
					</div>
				</Button>
				<Button
					variant="warning"
					type="submit"
					onClick={handleRegisterUser} >
					Register
				</Button>
			</ButtonGroup>
		</Form>
	)
}

export default RegisterForm

