import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./Profile.css";
const Profile = (props) => {
  return (
    <div className="profile__container">
      <Container fluid>
        <Row>
          <Col></Col>
          <Col sm={12} className="profile__inner__container">
            <h2>שלום, יובל עטיה</h2>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab eventKey="home" title="פרטים אישיים">
                hi there
              </Tab>
              <Tab eventKey="profile" title="Profile">
                hi there
              </Tab>
              <Tab eventKey="contact" title="Contact">
                hi there
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
