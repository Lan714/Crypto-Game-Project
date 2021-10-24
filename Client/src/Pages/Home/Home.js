import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../../components/NavBar'
import Footer from '../../components/Footer/Footer'
import CoinSummaryPage from '../CoinSummary/CoinSummaryPage'
import LimitBox from '../../components/LimitBox'
import './Home.css'

const Home = () => {
	if (!localStorage.getItem('token')) {
		window.location = '/signin'
	}

	return (
		<div className="homePg">
			<Navbar />
			<div className="pgContent">
				<Container className="mb-5" id="homeHeader">
					<Row>
						<Col id="homeTitle">
							<FontAwesomeIcon icon={faCoins} id="homeIcon" />
							CryptoMaster
						</Col>
					</Row>
				</Container>
				<CoinSummaryPage />
				<LimitBox />
				<Footer />
			</div>
		</div>
	)
}

export default Home