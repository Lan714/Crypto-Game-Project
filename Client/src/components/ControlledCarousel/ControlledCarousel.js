import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Jayeon from './Image/jay_avatar.png'
import Shannon from './Image/shannon_avatar.png'
import Samantha from './Image/samantha_avatar.png'
import './ControlledCarousel.css';

function ControlledCarousel() {
  return (
    <div id="Title" style={{ display: 'block', width: 500, padding: 30, color:'white' }}>
      <h1>Who We Are</h1>
      <h3>CryptoMaster is the brainchild of six UCI Full Stack Bootcamp Students. Click on our names to find out more about us.</h3>
      <Carousel center="xs" id="WhoWeAre">
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__340.jpg"/>
          <Carousel.Caption>
            <h3> <a className="text-white text-decoration-none" href="https://github.com/jjbenson13">Jasmine Benson</a> </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img id="Image"className="d-block w-100" src="https://cdn.pixabay.com/photo/2021/09/20/21/32/lake-6641880__480.jpg"/>
          <Carousel.Caption>
            <h3><a className="text-white text-decoration-none" href="https://github.com/Lan714">Lan Bui</a></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img id="Image" className="d-block w-100" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"/>
          <Carousel.Caption>
            <h3><a className="text-white text-decoration-none" href="https://github.com/remireems">Remi Kim</a></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img id="Image" className="d-block w-100" src={Samantha}/>
          <Carousel.Caption>
            <h3><a className="text-white text-decoration-none" href="https://github.com/Heaulin">Samantha Mack</a></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img id="Image" className="d-block w-100" src={Jayeon}/>
          <Carousel.Caption>
            <h3><a className="text-white text-decoration-none" href="https://github.com/jypkr">Jaeyeon Park</a></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img id="Image"className="d-block w-100" src={Shannon}/>
          <Carousel.Caption>
            <h3><a className="text-white text-decoration-none" href="https://github.com/shannono18">Shannon Rayes</a></h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel