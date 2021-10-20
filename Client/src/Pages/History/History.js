import { useState, useEffect } from 'react'
import HistoryAPI from '../../utils/HistoryAPI'
import Navbar from '../../components/NavBar'
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DropdownWeeknumForm from '../../components/DropdownWeekNumForm'
import Table from 'rc-table'
import './History.css'

const columns_overview = [
	{
		title: 'Cash Balance',
		dataIndex: 'cash_balance',
		key: 'cash_balance',
		width: 200,
	},
	{
		title: 'Coin Balance',
		dataIndex: 'coin_balance',
		key: 'coin_balance',
		width: 200,
	},
	{
		title: 'Profit',
		dataIndex: 'profit',
		key: 'profit',
		width: 200,
	}
];

const columns_transaction = [
	{
		title: 'Date Time',
		dataIndex: 'date',
		key: 'date',
		width: 300,
	},
	{
		title: 'Coin Name',
		dataIndex: 'crypto_name',
		key: 'crypto_name',
		width: 200,
	},
	{
		title: 'Side',
		dataIndex: 'side',
		key: 'side',
		width: 200,
	},
	{
		title: 'Price',
		dataIndex: 'price',
		key: 'price',
		width: 200,
	},
	{
		title: 'Amount',
		dataIndex: 'amount',
		key: 'amount',
		width: 200,
	},
	{
		title: 'Total',
		dataIndex: 'total',
		key: 'total',
		width: 200,
	}
];

const History = () => {
	const [historyState, setHistoryState] = useState({
		historys: []
	})

	const [overviewState, setOverviewState] = useState([{
		cash_balance: '',
		coin_balance: '',
		profit: ''
	}])

	const [transcationState, setTransactionState] = useState([])


	const getHistory = (weekNum) => {
		HistoryAPI.getHistory(weekNum)
			.then((data) => {
				let total_crypto = 0
				for (let i = 0; i < data.data[0].crypto_balance.length; i++) {
					total_crypto += data.data[0].crypto_balance[i].dollar_value
				}

				setOverviewState([{
					cash_balance: data.data[0].cash_balance,
					coin_balance: total_crypto,
					profit: data.data[0].profit
				}])
			})
	}

	const getTransaction = (weekNum) => {
		HistoryAPI.getHistory(weekNum)
			.then((data) => {
				setTransactionState(data.data[0].transaction)
			})
	}

	useEffect(() => {
		HistoryAPI.getWeekNum()
			.then(({ data: historys }) => setHistoryState({ ...historyState, historys }))
			.catch(err => window.location = '/')
	}, [])

	return (
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
										getfunction={getHistory}
										getfunction2={getTransaction} />))
								}
							</Dropdown.Menu>
						</Dropdown>
					</Row>
					<br />
					<Row>
						<Col sm={6}>
							Overview
						</Col>
						<Col sm={6}>
							<Table columns={columns_overview} data={overviewState} />
						</Col>
					</Row>
					<br />
					<Row>
						<Table columns={columns_transaction} data={transcationState} />
					</Row>
				</Container>
			</div>
		</div>
	)
}

export default History