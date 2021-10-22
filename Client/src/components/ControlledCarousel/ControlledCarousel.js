import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import './ControlledCarousel.css';

function ControlledCarousel() {
  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
      <h1 text="white">Who We Are</h1>
      <h3>CryptoMaster is the brainchild of six UCI Full Stack Bootcamp Students</h3>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"/>
          <Carousel.Caption>
            <h3>Jasmine Benson</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Image className="d-block w-100" src="holder.js/171x180" roundedCircle/>
          <Carousel.Caption>
            <h3>Lan Bui</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Image Two" />
          <Carousel.Caption>
            <h3>Remi Kim</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Image Two" />
          <Carousel.Caption>
            <h3>Samantha Mack</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100" src=".ControlledCarousel/jay_avatar.png"
            alt="Image Two" />
          <Carousel.Caption>
            <h3>Jaeyeon Park</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100" src="shannon_avatar.png/171x180" alt="Image Two" />
          <Carousel.Caption>
            <h3>Shannon Rayes</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  );
}

export default ControlledCarousel