import { useState, useEffect } from 'react'
import UserAPI from '../../utils/UserAPI'
import Button from 'react-bootstrap/Button'
import Navbar from '../../components/Navbar'
import './Home.css'

const Home = () => {
	return (
		<div className="homePg">
			<Navbar />
			<div className="pgContent">
				Hello world
			</div>
		</div>
	)
}

export default Home