import React from "react";
import Container from "react-bootstrap/Container"; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

import JobAccordion from './JobAccordion';

import "./Jobs.css";
class Jobs extends React.Component {
  render() {
    return (
      <div className='jobs__container'>
        <Container>
        <Row className="jobs__filter__container">
          <Col>חפש לפי שם</Col>
          <Col>חפש לפי שם</Col>
          <Col>חפש לפי שם</Col>
        </Row>
        <Row className="jobs__results__container"> 
          <Col>
            <Accordion defaultActiveKey="0">
              <JobAccordion />
              <JobAccordion />
            </Accordion>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default Jobs;
