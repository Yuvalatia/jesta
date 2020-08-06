import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import Activity from "./Activity";

import "./Profile.css";
const Profile = (props) => {
  return (
    <div className="profile__container">
      <Container fluid>
        <Row>
          <Col></Col>
          <Col sm={12} className="profile__inner__container">
            <div className="profile__header">
              <Button variant="warning">פרסם עבודה</Button>
              <h2>שלום, יובל עטיה</h2>
            </div>
            <Tabs defaultActiveKey="activity" id="uncontrolled-tab-example">
              <Tab eventKey="activity" title="פעילות חשבון">
                <Activity />
              </Tab>
              <Tab eventKey="myjobs" title="העבודות שלי">
                hi there
              </Tab>
              <Tab eventKey="details" title="פרטים אישיים">
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
