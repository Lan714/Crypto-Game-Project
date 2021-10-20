import { useState, useEffect } from 'react'
import UserAPI from '../../utils/UserAPI'
import HistoryAPI from '../../utils/HistoryAPI'
import Button from 'react-bootstrap/Button'
import Navbar from '../../components/Navbar'
import './History.css'

const History = () => {
	return (
		<div className="historyPg">
			<Navbar />
			<div className="pgContent">
				History Page
			</div>	
		</div>
	)
}

export default History