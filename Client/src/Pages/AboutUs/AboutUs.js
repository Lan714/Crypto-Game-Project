import Navbar from '../../components/NavBar'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ControlledCarousel from '../../components/ControlledCarousel'
import './AboutUs.css'
import Footer2 from '../../components/Footer2'
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
function AboutUs() {
	return (
		<div className="aboutUsPg">
			<Navbar />
			<div className="text-center">
				<Container id="aboutUsHeader">
					<Col id="aboutUsTitle">
						<p class="text-warning" FontAwesomeIcon icon={"fas fa-user"} id="aboutUsIcon" />
						About Us
					</Col>
				</Container>
				<Container id="WhatisCrypto">
          <Row top="xs" xs={12}>
            <Col id="WhatisCrypto">
              <h3>What is CryptoMaster?</h3>
            </Col>
          </Row>
        </Container>
        <Container id="WhatisCrypto">
          <Row sm={8}>
            <Col id="WhatisCrypto">
              <p><h6>CryptoMaster is a play investment game with virtual $100 which is given when users register for the website. Play the game for a week and able to see their weekly rankings by their profit. The market in the game will be same as real-time market(Stock or Cryptocurrency). Test yours skills to see if you have what it takes to be ahead of the crypto curve. Happy Gaming!</h6></p>
            </Col>
          </Row>
        </Container>
				<Container id="howToPlay">
					<Row top="xs" xs={12} md={1}>
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
				<Container id="ControlledCarousel">
					<Row xs={12}>
						<Col id="Carousel">
							<ControlledCarousel />
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
              <p><h5>Comments, Question or Concerns, feel free to contact us at:  </h5>
                <h5><li className="list-unstyled">
                  {/* <p className="mb-0"> */}
                <FontAwesomeIcon icon={faPhone} className="icon2" />(541) 754-3010
                {/* </p> */}
                  </li>
                  </h5>
                  </p>
                  <h5><li className="list-unstyled">
                    {/* <p className="mb-0"> */}
                <FontAwesomeIcon icon={faEnvelope} className="icon2" />CryptoMaster@gmail.com
                {/* </p> */}
                </li>
                </h5>
            </Col>
          </Row>
        </Container>

				<Footer2 />
			</div>
		</div>)
}

export default AboutUs