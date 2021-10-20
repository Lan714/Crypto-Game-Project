import Dropdown from 'react-bootstrap/Dropdown'

const DropdownWeeknumForm = ({
	weekNum,
	getfunction
}) => {
	return (
		<Dropdown.Item onClick={() => getfunction(weekNum)}>{weekNum}</Dropdown.Item>
	)
}

export default DropdownWeeknumForm
