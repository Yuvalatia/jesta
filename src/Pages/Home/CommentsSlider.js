import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

import clear_background from '../../Assets/Images/clear_background.png';
import user1 from '../../Assets/Images/user1.jpg';
import user2 from '../../Assets/Images/user2.jpg';
import user3 from '../../Assets/Images/user3.jpg';

import './CommentsSlider.css';
const CommentsSlider = (props) => {
    return(
        <Carousel controls={false} indicators={false}>
  <Carousel.Item className="con_item">
    <img
      className="d-block w-100"
      src={clear_background}
      alt="First slide"
    />
    <Carousel.Caption className="slider__comment main-font">
      <Image src={user1} roundedCircle style={{width: 120, border: '3px solid white'}}/>
      <p>בן אור</p>
      <h1>משתמש בג'סטה כל הזמן, אפליקצייה טובה מאוד</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="con_item">
  <img
      className="d-block w-100"
      src={clear_background}
      alt="First slide"
    />

    <Carousel.Caption className="slider__comment main-font">
    <Image src={user2} roundedCircle style={{width: 120, border: '3px solid white'}}/>
      <p>רון חכמון</p>
      <h1>אפליקצייה מעולה לכסף מהיר ועבודה חד פעמית</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="con_item">
  <img
      className="d-block w-100"
      src={clear_background}
      alt="First slide"
    />

    <Carousel.Caption className="slider__comment main-font">
    <Image src={user3} roundedCircle style={{width: 120, border: '3px solid white'}} />
      <p>תומר ברוך</p>
      <h1>פשוט כיף ונוח</h1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
}

export default CommentsSlider;