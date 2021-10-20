import ListGroupItem from 'react-bootstrap/ListGroupItem'

const HistoryElem = ({
	id,
	weekNumber,
	profit
}) => {
	return (
		<ListGroupItem>
			{weekNumber}
			{profit}
		</ListGroupItem>
	)
}

export default HistoryElem
