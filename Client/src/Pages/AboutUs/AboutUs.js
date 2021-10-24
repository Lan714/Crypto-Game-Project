import Navbar from '../../components/NavBar'
import './AboutUs.css'
import Footer2 from '../../components/Footer2'
import Footer from '../../components/Footer'
const AboutUs = () => {
	return (
		<div className="aboutUsPg">
			<Navbar />
			<div className="pgContent">
				About Us Page
			{/* <Footer2 />	 */}
			<Footer />
			</div>
		</div>
	)
}

export default AboutUs