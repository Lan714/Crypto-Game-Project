import { useState, useEffect } from 'react'
import HistoryAPI from '../../utils/HistoryAPI'
import Navbar from '../../components/NavBar'
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DropdownWeeknumForm from '../../components/DropdownWeekNumForm'
import './History.css'
import * as ReactBootStrap from 'react-bootstrap'


const History = () => {
	const [historyState, setHistoryState] = useState({
		weekNumber: '',
		historys: []
	})

	const [overviewState, setOverviewState] = useState([{
		cash_balance: '',
		coin_balance: '',
		profit: ''
	}])

	const [transcationState, setTransactionState] = useState([])
	const [weekNumState, setWeekNumState] = useState(0)
	const [loading, setLoading] = useState(false)

	const getTransaction = (transactions_id) => {
		HistoryAPI.getTransaction(transactions_id)
			.then((data) => {
				console.log(data)
				setTransactionState(data.data)
			})
		setLoading(true)
	}


	const getHistory = (weekNum) => {
		HistoryAPI.getHistory(weekNum)
			.then((data) => {
				setWeekNumState(data.data[0].weekNumber)
				setOverviewState([{
					cash_balance: data.data[0].cash_balance,
					coin_balance: data.data[0].crypto_balances,
					profit: data.data[0].profit
				}])

				getTransaction(data.data[0].transactions[0])
			})

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

	const renderOverview = (overview, index) => {
		return (
			<tr key={index}>
				<td>{overview.cash_balance}</td>
				<td>{overview.coin_balance}</td>
				<td>{overview.profit}</td>
			</tr>
		)

	}

	const renderTransaction = (transaction, index) => {
		return (
			<tr key={index}>
				<td>{transaction.date}</td>
				<td>{transaction.crypto_name}</td>
				<td>{transaction.side}</td>
				<td>{transaction.price}</td>
				<td>{transaction.amount}</td>
				<td>{transaction.total}</td>
			</tr>
		)
	}

	return (
		<>
			<div className="historyPg">
				<Navbar />
				<div className="pgContent">
					<Container className="cont">
						<Row>
							<Dropdown>
								<Dropdown.Toggle variant="success" id="dropdown-basic">
									Choose week number to see
								</Dropdown.Toggle>
								<Dropdown.Menu>
									{
										historyState.historys.map((weekNumber) => (<DropdownWeeknumForm
											weekNum={weekNumber}
											getfunction={getHistory} />))
									}
								</Dropdown.Menu>
							</Dropdown>
						</Row>
						<br />
						{loading ? (
							<div>
								<Row>
									<Col sm={6}>
										Week {weekNumState} Overview
									</Col>
									<Col sm={6}>
										<ReactBootStrap.Table striped bordered hover>
											<thead>
												<tr>
													<th>Cash Balance</th>
													<th>Coin Balance</th>
													<th>Profit</th>
												</tr>
											</thead>
											<tbody>
												{
													overviewState.map(renderOverview)
												}
											</tbody>
										</ReactBootStrap.Table>
									</Col>
								</Row>
								<br />
								<Row>
									<ReactBootStrap.Table striped bordered hover>
										<thead>
											<tr>
												<th>Date Time</th>
												<th>Coin Name</th>
												<th>Side</th>
												<th>Price</th>
												<th>Amount</th>
												<th>Total</th>
											</tr>
										</thead>
										<tbody>
											{
												transcationState.map(renderTransaction)
											}
										</tbody>
									</ReactBootStrap.Table>
								</Row>
							</div>
						)

							: (
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

export default History