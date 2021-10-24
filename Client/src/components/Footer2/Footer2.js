import { Container, Row } from 'react-bootstrap'
import './Footer2.css'

const Footer2 = () => {

  return (
    <Container id="copyright">
      <Row className="mt-5 text-center">
          <p>
            <small className="text-grey-50">
              © 2021. All Rights Reserved.
            </small>
          </p>  
      </Row>
    </Container>
  )
}
export default Footer2