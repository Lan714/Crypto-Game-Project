import RegisterForm from '../../components/RegisterForm'
import SignInForm from '../../components/SignInForm'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const Auth = () => {
  return (
    <>
      <Card className="text-center">
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
          <Col sm={6}>
            <SignInForm />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Auth

