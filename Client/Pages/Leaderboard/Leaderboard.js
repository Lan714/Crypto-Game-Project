import { useState, useEffect } from 'react'
import HistoryElem from '../../components/HistoryElem'
import DropdownWeeknumForm from '../../components/DropdownWeekNumForm'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import HistoryAPI from '../../utils/HistoryAPI'
import UserAPI from '../../utils/UserAPI'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from '../../components/Navbar'
import './Leaderboard.css'
import Table from 'rc-table'

const columns = [
	{
		title: '#',
		dataIndex: 'rank',
		key: 'rank',
		width: 100,
	},
	{
		title: 'Username',
		dataIndex: 'username',
		key: 'username',
		width: 100,
	},
	{
		title: 'Profit',
		dataIndex: 'profit',
		key: 'profit',
		width: 200,
	}
];

const Leaderboard = () => {
	const [historyState, setHistoryState] = useState({
		weekNumber: '',
		historys: []
	})

	const [rankingState, setRankingState] = useState([])

	const getRankings = (weekNum) => {
		HistoryAPI.getRankingforSpecificWeek(weekNum)
			.then(({ data }) => {
				console.log(data)
				setRankingState(data)
			})
	}

	useEffect(() => {
		HistoryAPI.getWeekNum()
			.then(({ data: historys }) => setHistoryState({ ...historyState, historys }))
			.catch(err => window.location = '/')
		HistoryAPI.getRankingforSpecificWeek(1)
			.then(({ data }) => {
				setRankingState(data)
			})
	}, [])


	return (
		<div className="homePg">
			<Navbar />
			<div className="pgContent">
				<Container className="cont">
					<Row>
						<Col sm={6}>
							<Dropdown>
								<Dropdown.Toggle variant="success" id="dropdown-basic">
									Choose week number to see
								</Dropdown.Toggle>
								<Dropdown.Menu>
									{
										historyState.historys.map((weekNumber) => (<DropdownWeeknumForm
											weekNum={weekNumber}
											getRankings={getRankings} />))
									}
								</Dropdown.Menu>
							</Dropdown>
						</Col>
					</Row>
					<Row>
						<Table columns={columns} data={rankingState} />
					</Row>
				</Container>
			</div>
		</div>
	)
}

export default Leaderboard