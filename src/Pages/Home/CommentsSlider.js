import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

import home_intro from '../../Assets/Images/home_intro.jpg';

import './CommentsSlider.css';
const CommentsSlider = (props) => {
    return(
        <Carousel controls={false} indicators={false}>
  <Carousel.Item className="con_item">
    <img
      className="d-block w-100"
      src={home_intro}
      alt="First slide"
    />
    <Carousel.Caption className="capcap">
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="con_item">
  <img
      className="d-block w-100"
      src={home_intro}
      alt="First slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="con_item">
  <img
      className="d-block w-100"
      src={home_intro}
      alt="First slide"
    />

    <Carousel.Caption className="capcap">
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
}

export default CommentsSlider;