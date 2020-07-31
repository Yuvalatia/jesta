import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import IntroTable from './IntroTable';
import IconSection from './IconSection';
import CommentsSlider from './CommentsSlider';
import home_intro from '../../Assets/Images/home_intro.jpg';

import "./Home.css";
class Home extends React.Component {

  render() {
    const DUMMY_JOBS = [
      {id: '0', description: "פינוי אשפה מגינה", date:"14/2/2020", location:"אשקלון", payment:"301", owner: "אבי"},
      {id: '1', description: "פינוי אשפה מגינה", date:"14/2/2020", location:"אשקלון", payment:"300", owner: "אבי"},
      {id: '2', description: "פינוי אשפה מגינה", date:"14/2/2020", location:"אשקלון", payment:"300", owner: "אבי"},
      {id: '3', description: "פינוי אשפה מגינה", date:"14/2/2020", location:"אשקלון", payment:"300", owner: "אבי"},
      {id: '4', description: "פינוי אשפה מגינה", date:"14/2/2020", location:"אשקלון", payment:"300", owner: "אבי"},
    ]
    return (
      <Container fluid className="home__container">
        <Row>   
          <img src={home_intro} alt="home intro" className="intro_img" />
        </Row>
        <Row>
          <div className="home__container__title">
            <span>לוח עבודות זמינות - אשקלון והסביבה</span>
          </div>        
        </Row>
        <Row className="home__row__table">
          <IntroTable data={DUMMY_JOBS} />
        </Row>
        <Row className="home__row__whyjesta">
          <Col sm={12} md={4}>
            <IconSection iconName='money-bill-wave' title='חינם לגמרי' info='מערכת חינמית ללא תשום' />       
          </Col>
          <Col sm={12} md={4}>
            <IconSection iconName='mobile-alt' title='נוחות ונגישות' info='אפליקציה נוחה למשתמש בעלת נגישות מכל מכשיר בכל זמן' />       
          </Col>
          <Col sm={12} md={4}>
            <IconSection iconName='handshake' title='שיתופיות' info='פתרון מהיר לעבודה חד פעמית לעובד ומעביד' />       
          </Col>
        </Row>
        <Row className="home__row__comments">
          <CommentsSlider />
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
