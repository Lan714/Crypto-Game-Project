import React from 'react'
import Card from 'react-bootstrap/card'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faUsers, faAddressBook, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
<Card>
  <Card.Body>
      <div className="mt-5 pt-5 pb-5 footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xs-12 info">
              <h4><FontAwesomeIcon icon={faInfoCircle} className="info" />About CryptoMaster</h4>
              <h6 className="pr-5">
                A gaming app that allows the users to practice their skills in crypto currency exchange. This app was developed by 6 coding boot camp students from UC Irvine. Happy Gaming!  
              </h6>
            </div>
            <div className="col-lg-3 col-xs-12 links">
              <h4 className="mt-lg-0 mt-sm-3"><FontAwesomeIcon icon={faUsers} className="phone" />About us</h4>
              <ul className="m-0 p-0">
                <li> <a href="https://github.com/jypkr">Jaeyeon Park</a></li>
                <li> <a href="https://github.com/Lan714">Lan Bui</a></li>
                <li> <a href="https://github.com/jjbenson13">Jasmine Benson</a></li>
                <li> <a href="https://github.com/shannono18">Shannon Rayes</a></li>
                <li> <a href="https://github.com/remireems">Remi Kim</a></li>
                <li> <a href="https://github.com/Heaulin">Samantha Mack</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-xs-12 Contact">
              <h4 className="mt-lg-0 mt-sm-4"><FontAwesomeIcon icon={faAddressBook} className="address" />Contact us</h4>
              <p class="mb-0"><FontAwesomeIcon icon={faPhone} className="phone" />(541) 754-3010</p>
              <p><FontAwesomeIcon icon={faEnvelope} className="mail" />cryptomaster@gmail.com</p>
            </div>
          </div>
          <div class="row mt-5">
    <div class="col copyright">
      <p class=""><small class="text-white-50">© 2021. All Rights Reserved.</small></p>
    </div>
  </div>
        </div>
      </div>
  </Card.Body>
</Card>
  )
}
export default Footer