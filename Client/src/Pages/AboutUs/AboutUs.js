import Navbar from '../../components/NavBar'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ControlledCarousel from '../../components/ControlledCarousel'
import './AboutUs.css'
import Footer2 from '../../components/Footer2'

function AboutUs() {
	return (
		<div className="aboutUsPg">
			<Navbar />
			<div className=" aboutUsPgContent text-center">
				<Container className="aboutUsCont" id="aboutUsHeader">
					<Col id="aboutUsTitle">
						<p class="text-warning" FontAwesomeIcon icon={"fas fa-user"} id="aboutUsIcon" />
						About Us
					</Col>
				</Container>
				<Container className="aboutUsCont" id="howToPlay">
					<Row top="xs" xs={12} md={1}>
						<Col id="howToPlay">
							<h3>How to Play CryptoMaster</h3>
						</Col>
					</Row>
				</Container>
				<Container className="aboutUsCont" id="Instructions">
					<Row sm={8}>
						<Col id="Instructions">
							<p><h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6></p>
						</Col>
					</Row>
				</Container>
				<Container className="aboutUsCont" id="ControlledCarousel">
					<Row xs={12}>
						<Col id="Carousel">
							<ControlledCarousel />
						</Col>
					</Row>
				</Container>
				<Footer2 />
			</div>
		</div>)
}

export default AboutUs