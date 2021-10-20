import { useState, useEffect } from 'react'
import DropdownWeeknumForm from '../../components/DropdownWeekNumForm'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HistoryAPI from '../../utils/HistoryAPI'
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from '../../components/NavBar'
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
				setRankingState(data)
			})
	}

	useEffect(() => {
		HistoryAPI.getWeekNum()
			.then(({ data: historys }) => setHistoryState({ ...historyState, historys }))
			.catch(err => window.location = '/')
		// weeknum=1 cannot be default for every users
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
											getfunction={getRankings} />))
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