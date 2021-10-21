import RegisterForm from '../../components/RegisterForm'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import BackgroundVideo from '../../components/BackgroundVideo/BackgroundVideo'

const Register = () => {
  const newLocal = <BackgroundVideo />
  return (
    <>
      <Card className="register">
        <Card.Body>
          <Card.Title>CryptoMaster</Card.Title>
        </Card.Body>
        <Card.Footer className="text-muted">Become a Crypto expert here!</Card.Footer>
      </Card>
      <Container>
        <Row>
          <Col sm={6}>
            <RegisterForm />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Register
