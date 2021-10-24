import Navbar from '../../components/NavBar'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ControlledCarousel from '../../components/ControlledCarousel'
import './AboutUs.css'
import Footer2 from '../../components/Footer2'
import { faPhone, faEnvelope, faUsers, faAddressBook, faInfoCircle} from '@fortawesome/free-solid-svg-icons'

function AboutUs() {
	return (
		<div className="aboutUsPg">
			<Navbar />
			<div className="pgContent">
				<Container id="aboutUsHeader">
					<Col id="aboutUsTitle">
						<p class="text-warning" FontAwesomeIcon icon={"fas fa-user"} id="aboutUsIcon" />
						About Us
					</Col>
				</Container>
				<Container id="howToPlay">
					<Row top="xs" xs={12}>
						<Col id="howToPlay">
							<h3>How to Play CryptoMaster</h3>
						</Col>
					</Row>
				</Container>
				<Container id="Instructions">
					<Row sm={8}>
						<Col id="Instructions">
							<p><h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6></p>
						</Col>
					</Row>
				</Container>
				<Container id="ContactInfo">
					<Row top="xs" xs={12}>
						<Col id="Contact">
							<h3>Get In Touch </h3>
						</Col>
					</Row>
				</Container>
				<Container id="ContactInfo">
					<Row sm={8}>
						<Col id="ContactInfo">
							<p><h6>Comments, Question or Concerns, feel free to contact us at:
								<li className="list-unstyled"><p className="mb-0">
                <FontAwesomeIcon icon={faPhone} className="icon2" />(541) 754-3010</p>
									</li></h6></p>
									<li className="list-unstyled"><p className="mb-0">
                <FontAwesomeIcon icon={faEnvelope} className="icon2" />CryptoMaster@gmail.com
                </p></li>
						</Col>
					</Row>
				</Container>
				<Container id="ControlledCarousel">
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