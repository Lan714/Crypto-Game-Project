import Navbar from '../../components/NavBar'
import './Home.css'
import Footer from '../../components/Footer/Footer'
import CoinSummaryPage from '../CoinSummary/CoinSummaryPage'

const Home = () => {
	if (!localStorage.getItem('token')) {
		window.location = '/signin'
	}

	return (
		<div className="homePg">
			<Navbar />
			<div className="pgContent">
				<CoinSummaryPage />
				<Footer />
			</div>
		</div>
	)
}

export default Home