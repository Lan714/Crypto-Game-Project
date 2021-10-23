import { useState } from 'react'
import UserAPI from '../../utils/UserAPI'
import { useHistory } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './SignIn.css'
import { FormGroup } from 'react-bootstrap'


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
		<div className="olor-overlay d-flex justify-content-center align-items-center">
		<Form classname="rounded p-4 p-sm-3">
			<Form.Group className="mb-3 c" controlId="username">
				<Form.Label>Username </Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter your username"
					name="username"
					value={userState.username}
					onChange={handleInputChange} />
			</Form.Group>
			<Form.Group className="mb-3" controlId="password">
				<Form.Label>Password </Form.Label>
				<Form.Control
					type="password"
					placeholder="Enter your password"
					name="password"
					value={userState.password}
					onChange={handleInputChange} />
			</Form.Group>
			<Form.Group className="mb-3"
			controlId="formBasicCheckbox"> 
			<Form.Check type="checkbox" label="Remember Me"/>
			</Form.Group>
			<Button id="signIn button"
				variant="warning"
				type="submit"
				onClick={handleLoginUser} >
				Sign In
			</Button>
			<Button id="register button"
				variant="warning"
				type="button">
				<div onClick={() => history.push('/Register')} className="Register">
				<span className="Register">Register</span>
				</div>
			</Button>
		</Form>
		</div>
	)
}

export default SignInForm
