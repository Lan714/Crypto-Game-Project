import { useState } from 'react'
import SignInForm from '../../components/SignInForm'
import RegisterForm from '../../components/RegisterForm'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import BackgroundVideo from '../../components/BackgroundVideo/BackgroundVideo'


const Auth = () => {
  const [toggle, setToggle] = useState(false)
  const clicked_toggle = () => {
    setToggle(!toggle)
  }
  return (
    <>
      <Card className="text-center" bg="dark" text="white">
        <Card.Body size="lg">
          <Card.Title>CryptoMaster</Card.Title>
        </Card.Body>
        <Card.Footer className="text-muted" text="white">New to CryptoMaster? Sign-up is free and it's easy!</Card.Footer>
      </Card>
      <> 
      <BackgroundVideo/>
      <Container>
            <SignInForm sm={3} id="signIn"/>
      </Container>
      </>
    </>
  )
}

export default Auth
