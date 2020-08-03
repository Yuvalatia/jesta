import React from "react";
import Container from "react-bootstrap/Container"; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FiltersContainer from './FiltersContainer';
import JobsContainer from './JobsContainer';

import "./Jobs.css";
class Jobs extends React.Component {
  render() {
    const DUMMY_JOBS = [
      {id: '8', description: " פינוי אשפה מגמאוד מאוד מאודמ ואינה",image:'', date:"14/2/2020", location:"אשקלון", payment:"301", ownerId: "1"},
      {id: '14', description: "פינוי אשפה מגינה",image:'', date:"14/2/2020", location:"אשקלון", payment:"300", ownerId: "2"},
      {id: '2', description: "פינוי אשפה מגינה",image:'', date:"14/2/2020", location:"אשקלון", payment:"300", ownerId: "3"},
      {id: '3', description: "פינוי אשפה מגינה",image:'', date:"14/2/2020", location:"אשקלון", payment:"300", ownerId: "4"},
      {id: '4', description: "פינוי אשפה מגינה",image:'', date:"14/2/2020", location:"אשקלון", payment:"300", ownerId: "5"},
    ]
    return (
      <div className='jobs__container'>
        <Container>
        <Row>
          <Col>
            <FiltersContainer />
          </Col>
        </Row>
        <Row className="jobs__results__container"> 
          <Col>
           <JobsContainer data={DUMMY_JOBS} />
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default Jobs;
