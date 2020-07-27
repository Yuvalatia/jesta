import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import IntroTable from './IntroTable';
import home_intro from '../../Assets/Images/home_intro.jpg';

import "./Home.css";
class Home extends React.Component {

  render() {
    const DUMMY_JOBS = [
      {id: '0', description: "פינוי אשפה מגינה", date:"14/2/2020", jobTime:"3", payment:"301", jobOwner: "אבי"},
      {id: '1', description: "פינוי אשפה מגינה", date:"14/2/2020", jobTime:"3", payment:"300", jobOwner: "אבי"},
      {id: '2', description: "פינוי אשפה מגינה", date:"14/2/2020", jobTime:"3", payment:"300", jobOwner: "אבי"},
      {id: '3', description: "פינוי אשפה מגינה", date:"14/2/2020", jobTime:"3", payment:"300", jobOwner: "אבי"},
    ]
    return (
      <Container fluid>
        <Row>   
          <img src={home_intro} alt="home intro" className="intro_img" />
        </Row>
        <Row>
          <div className="home__container__title">
            <span>חמשת העבודת החמות</span>
          </div>        
        </Row>
        <Row className="home__row__table">
          
          
          <IntroTable />

          
        </Row>
        <Row>
          <h1>dfdf</h1>
        </Row>
        <Row>
          <h1>dfdf</h1>
        </Row>
        <Row>
          <h1>dfdf</h1>
        </Row>

        <Row>
          <h1>dfdf</h1>
        </Row>
        <Row>
          <h1>dfdf</h1>
        </Row>
        <Row>
          <h1>dfdf</h1>
        </Row>
        <Row>
          <h1>dfdf</h1>
        </Row>
        <Row>
          <h1>dfdf</h1>
        </Row>
        <Row>
          <h1>dfdf</h1>
        </Row>
        <Row>
          <h1>dfdf</h1>
        </Row>
        <Row>
          <h1>dfdf</h1>
        </Row>
        <Row>
          <h1>dfdf</h1>
        </Row>
        <Row>
          <h1>dfdf</h1>
        </Row>
        <Row>
          <h1>dfdf</h1>
        </Row>
        <Row>
          <h1>dfdf</h1>
        </Row>
        <Row>
          <h1>dfdf</h1>
        </Row>
        <Row>
          <h1>dfdf</h1>
        </Row>
        <Row>
          <h1>dfdf</h1>
        </Row>
      </Container>
    );
  }
}

export default Home;
