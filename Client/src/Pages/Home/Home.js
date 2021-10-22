import Navbar from '../../components/NavBar'
import './Home.css'
import Footer from '../../components/Footer/Footer'
const Home = () => {
	if (!localStorage.getItem('token')) {
		window.location = '/signin'
	}
	return (
		<div className="homePg">
			<Navbar />
			<div className="pgContent">
				Hello world
			</div>
			<Footer />
		</div>
	)
}

export default Home