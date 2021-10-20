import Navbar from '../../components/NavBar'
import './Home.css'

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
		</div>
	)
}

export default Home