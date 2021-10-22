import Navbar from '../../components/NavBar'
import { Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import ImageCarousel from '../../components/ImageCarousel'
import './AboutUs.css'
import TouchCarousel from 'react-touch-carousel/lib/TouchCarousel'


const AboutUs = () => {
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
			</div>
		<div>
			<>
			<Container id="Carousel">
				<Row>
					<Col id="TouchCarousel">
					<div id="app"></div>{newFunction()}
					</Col>
				</Row>
			</Container>
			</>
		</div>
		</div>
	)

	function newFunction() {
		return <TouchCarousel />
	}
}

export default AboutUs