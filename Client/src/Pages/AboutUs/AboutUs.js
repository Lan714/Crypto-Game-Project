import { useState, useEffect } from 'react'
import UserAPI from '../../utils/UserAPI'
import Button from 'react-bootstrap/Button'
import Navbar from '../../components/Navbar'
import './AboutUs.css'

const AboutUs = () => {
	return (
		<div className="aboutUsPg">
			<Navbar />
			<div className="pgContent">
				About Us Page
			</div>
		</div>
	)
}

export default AboutUs