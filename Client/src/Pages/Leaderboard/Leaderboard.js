import { useState, useEffect } from 'react'
import DropdownWeeknumForm from '../../components/DropdownWeekNumForm'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import HistoryAPI from '../../utils/HistoryAPI'
import Navbar from '../../components/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import * as ReactBootStrap from 'react-bootstrap'
import './Leaderboard.css'

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
				console.log(ranks)
				setRankingState({ ...rankingState, ranks })
			})
		setLoading(true)
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
			.catch(err => window.location = '/')
	}, [])

	if (rankingState.ranks.length === 0) {
		console.log('rankingState is empty')
		HistoryAPI.getWeekNum()
			.then((data) => {
				setWeekNumState(Math.max(data.data[0]))
				HistoryAPI.getRankingforSpecificWeek(Math.max(data.data[0])).then(({ data: ranks }) => {
					setRankingState({ ...rankingState, ranks })
					setLoading(true)
				})
			})
	}

	return (
		<div className="homePg">
			<Navbar />
			<div className="pgContent">
				<Container id="lbHeader">
					<Row>
						<Col id="lbTitle">
							<FontAwesomeIcon icon={faTrophy} id="lbIcon" />
							Leaderboard
						</Col>
					</Row>
				</Container>
				<Container id="lbTableCont">
					<br />
					{loading ?
						(
							<div>
								<Row>
									<Col sm={4} className="d-flex p-0">
										<Dropdown>
											<Dropdown.Toggle className="weekTogBtn" variant="dark" id="dropdown-basic">
												Week
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
									<Col sm={4} className="d-flex justify-content-center align-items-center" id="lbTableTitle">
										Week {weekNumState}'s Ranking
									</Col>
									<Col sm={4}></Col>
								</Row>
								<br />
								<Row>
									<ReactBootStrap.Table striped bordered hover variant="dark">
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
								Loading................
								<ReactBootStrap.Spinner animation="grow" />
							</div>
						)
					}
				</Container>
			</div>
		</div>
	)
}

export default Leaderboard