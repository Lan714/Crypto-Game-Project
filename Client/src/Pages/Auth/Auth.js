import SignInForm from '../../components/SignInForm'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import BackgroundVideo from '../../components/BackgroundVideo/BackgroundVideo'


const Auth = () => {
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
      <BackgroundVideo/>
      <Container>
            <SignInForm sm={3} id="signIn"/>
      </Container>
      </div>
    </>
  )
}

export default Auth
