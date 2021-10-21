import RegisterForm from '../../components/RegisterForm'
import SignInForm from '../../components/SignInForm'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import BackgroundVideo from '../../components/BackgroundVideo/BackgroundVideo'

const Auth = () => {
  const newLocal = <BackgroundVideo />
  return (
    <>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>CryptoMaster</Card.Title>
        </Card.Body>
        <Card.Footer className="text-muted">New to CryptoMaster? Sign-up is free and it's easy!</Card.Footer>
      </Card>
      <div> 
      <BackgroundVideo/>
      <Container>
        <Row>
          <Col sm={6}>
            <SignInForm />
          </Col>
        </Row>
      </Container>
      </div>
    </>
  )
}

export default Auth
