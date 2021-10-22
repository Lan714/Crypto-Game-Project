import Navbar from '../../components/NavBar'
import { Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import ControlledCarousel from '../../components/ControlledCarousel'
import './AboutUs.css'

function AboutUs() {
	return (
		<div className="aboutUsPg">
			<Navbar />
			<div className="pgContent">
				<Container id="aboutUsHeader">
					<Row>
						<Col id="aboutUsTitle">
							<FontAwesomeIcon icon={faTrophy} id="aboutUsIcon" />
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
			</div>
		</div>)
}

export default AboutUs