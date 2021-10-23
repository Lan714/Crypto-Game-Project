import Navbar from '../../components/NavBar'
import './AboutUs.css'
import Footer2 from '../../components/Footer2'

const AboutUs = () => {
	if (!localStorage.getItem('token')) {
		window.location = '/signin'
	}
	return (
		<div className="aboutUsPg">
			<Navbar />
			<div className="pgContent">
				About Us Page
				<Footer2 />
			</div>
		</div>
	)
}

export default AboutUs