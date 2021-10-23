import Navbar from '../../components/NavBar'
import './Home.css'
import Footer from '../../components/Footer/Footer'
import BackgroundVideo from '../../components/BackgroundVideo/BackgroundVideo'

const Home = () => {
	if (!localStorage.getItem('token')) {
		window.location = '/signin'
	}
	return (
		<div className="homePg">
			<Navbar />
			<BackgroundVideo />
			<div className="pgContent">
				Hello world
				<Footer />
			</div>
		</div>
	)
}

export default Home