import { useState } from 'react'
import UserAPI from '../../utils/UserAPI'
import { useHistory } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './SignIn.css'


const SignInForm = () => {

	const history = useHistory()

	const [userState, setUserState] = useState({
		username: '',
		password: ''
	})

	const handleInputChange = ({ target: { name, value } }) => setUserState({ ...userState, [name]: value })

	const handleLoginUser = event => {
		event.preventDefault()
		UserAPI.login(userState)
			.then(({ data: token }) => {
				if (token) {
					localStorage.setItem('token', token)
					setUserState({ ...userState, name: '', email: '', username: '', password: '' })
					window.location = '/'
				}
				else {
					alert('User unable to login idk why')
				}
			})
			.catch(err => console.error(err))
	}

	return (
		<Form>
			<Form.Group className="mb-3 color-overlay d-flex justify-content-center align-items-center" controlId="username">
				<Form.Label>Username</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter your username"
					name="username"
					value={userState.username}
					onChange={handleInputChange} />
			</Form.Group>
			<Form.Group className="mb-3" controlId="password">
				<Form.Label>Password</Form.Label>
				<Form.Control
					type="password"
					placeholder="Enter your password"
					name="password"
					value={userState.password}
					onChange={handleInputChange} />
			</Form.Group>
			<Button id="signIn"
				variant="warning"
				type="submit"
				onClick={handleLoginUser} >
				Sign In
			</Button>
			<Button id="register"
				variant="warning"
				type="button">
				<div onClick={() => history.push('/Register')} className="Register">
				<span className="Register">Register</span>
				</div>
			</Button>
		</Form>
	)
}

export default SignInForm
