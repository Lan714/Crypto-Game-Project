import Navbar from '../../components/NavBar'
import { Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import ControlledCarousel from '../../components/ControlledCarousel'
import './AboutUs.css'
<<<<<<< HEAD

function AboutUs() {
=======
import Footer2 from '../../components/Footer2'
const AboutUs = () => {
	if (!localStorage.getItem('token')) {
		window.location = '/signin'
	}
>>>>>>> 0798f2019b98d948b0211f4ba1810d8f474fb8b2
	return (
		<div className="aboutUsPg">
			<Navbar />
			<div className="pgContent">
<<<<<<< HEAD
				<Container id="aboutUsHeader">
					<Row>
						<Col id="aboutUsTitle">
							<FontAwesomeIcon icon={faUsers} id="aboutUsIcon" />
							About Us
						</Col>
					</Row>
				</Container>
				<Container id="howToPlay">
					<Row>
						<Col id="howToPlay">
							How to Play
						</Col>
					</Row>
				</Container>
				<Container id="ControlledCarousel">
					<Row>
						<Col id="Carousel">
							<ControlledCarousel/>
						</Col>
					</Row>
				</Container>
=======
				About Us Page
				<Footer2 />
>>>>>>> 0798f2019b98d948b0211f4ba1810d8f474fb8b2
			</div>
		</div>)
}

export default AboutUs