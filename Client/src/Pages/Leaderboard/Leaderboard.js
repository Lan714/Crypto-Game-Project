import { useState, useEffect } from 'react'
import DropdownWeeknumForm from '../../components/DropdownWeekNumForm'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HistoryAPI from '../../utils/HistoryAPI'
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from '../../components/NavBar'
import './Leaderboard.css'
import * as ReactBootStrap from 'react-bootstrap'

const Leaderboard = () => {
	const [historyState, setHistoryState] = useState({
		weekNumber: '',
		historys: []
	})

	const [rankingState, setRankingState] = useState({
		ranks: []
	})

	const [weekNumState, setWeekNumState] = useState(0)
	const [loading, setLoading] = useState(false)

	const getRankings = (weekNum) => {
		setWeekNumState(weekNum)
		HistoryAPI.getRankingforSpecificWeek(weekNum)
			.then(({ data: ranks }) => {
				setRankingState({ ...rankingState, ranks })
				setLoading(true)
			})
			.catch(err => {
				console.log(err)
			})

	}

	const renderRank = (rank, index) => {
		return (
			<tr key={index}>
				<td>{rank.rank}</td>
				<td>{rank.username}</td>
				<td>{rank.profit}</td>
			</tr>
		)
	}

	useEffect(() => {
		HistoryAPI.getWeekNum()
			.then(({ data: historys }) => {
				historys = historys.sort()
				setHistoryState({ ...historyState, historys })
			})
			.catch(err => {
				console.log(err)
				window.location = '/'
			})
	}, [])

	return (
		<>
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
						<br />
						{loading ?
							(
								<div>
									<Row>
										Week {weekNumState}'s Ranking
									</Row>
									<br />
									<Row>
										<ReactBootStrap.Table striped bordered hover>
											<thead>
												<tr>
													<th>Rank</th>
													<th>Username</th>
													<th>Profit</th>
												</tr>
											</thead>
											<tbody>
												{
													rankingState.ranks.map(renderRank)
												}
											</tbody>
										</ReactBootStrap.Table>
									</Row>
								</div>
							)

							: (
								// Loader needs to be placed where table will be placed
								<div>
									Waiting for week number................
									<ReactBootStrap.Spinner animation="grow" />
								</div>
							)
						}
					</Container>
				</div>
			</div>
		</>
	)
}

export default Leaderboard