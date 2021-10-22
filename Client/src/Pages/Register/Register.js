import RegisterForm from '../../components/RegisterForm'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import BackgroundVideo from '../../components/BackgroundVideo/BackgroundVideo'
// import CopyRightFooter from '../../components/CopyRightFooter'
function Register() {
  const newLocal = <BackgroundVideo />
  return (
    <>
      <Card className="text-center" bg="dark" text="white">
        <Card.Body size="lg">
          <Card.Title>CryptoMaster</Card.Title>
        </Card.Body>
        <Card.Footer className="text-muted" text="white">New to CryptoMaster? Sign-up is free and it's easy!</Card.Footer>
      </Card>
      <div>
        <BackgroundVideo />
        <Container>
          <RegisterForm sm={3} id="Register" />
        </Container>
        {/* <CopyRightFooter /> */}
      </div>
    </>
  )
}

export default Register
