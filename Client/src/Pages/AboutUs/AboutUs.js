import Navbar from '../../components/NavBar'
import { Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ControlledCarousel from '../../components/ControlledCarousel'
import BackgroundVideo from '../../components/BackgroundVideo/BackgroundVideo'
import './AboutUs.css'

function AboutUs() {
	return (
		<div className="aboutUsPg">
			<Navbar />
			<div className="pgContent"> <BackgroundVideo/>
				<Container id="aboutUsHeader">
						<Col id="aboutUsTitle">
							<FontAwesomeIcon icon={"fas fa-user"} id="aboutUsIcon" />
							About Us
						</Col>
				</Container>
				<Container id="howToPlay">
					<Row>
						<Col id="howToPlay">
							How to Play CryptoMaster
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
			</div>
		</div>)
}

export default AboutUs