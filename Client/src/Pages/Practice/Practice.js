import Navbar from '../../components/NavBar'
import './Practice.css'
import Footer from '../../components/Footer/Footer'
import LimitBox from '../../components/LimitBox'

const Practice = () => {
	if (!localStorage.getItem('token')) {
		window.location = '/signin'
	}
	return (
		<div className="homePg">
			<Navbar />
			<div className="pgContent">
				<LimitBox />
				<Footer />
			</div>
		</div>
	)
}

export default Practice