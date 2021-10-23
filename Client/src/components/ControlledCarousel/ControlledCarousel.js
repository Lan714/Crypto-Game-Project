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
      <h3>CryptoMaster is the brainchild of six UCI Full Stack Bootcamp Students</h3>
      <Carousel center="xs" id="WhoWeAre">
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__340.jpg"/>
          <Carousel.Caption>
            <h3>Jasmine Benson</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img id="Image"className="d-block w-100" src="https://cdn.pixabay.com/photo/2021/09/20/21/32/lake-6641880__480.jpg"/>
          <Carousel.Caption>
            <h3>Lan Bui</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img id="Image" className="d-block w-100" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"/>
          <Carousel.Caption>
            <h3>Remi Kim</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img id="Image" className="d-block w-100" src={Samantha}/>
          <Carousel.Caption>
            <h3>Samantha Mack</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img id="Image" className="d-block w-100" src={Jayeon}/>
          <Carousel.Caption>
            <h3>Jaeyeon Park</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img id="Image"className="d-block w-100" src={Shannon}/>
          <Carousel.Caption>
            <h3>Shannon Rayes</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  );
}

export default ControlledCarousel