import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import Activity from "./Activity";

import UserContext from "../../context/UserContext";

import "./Profile.css";
const Profile = (props) => {
  const { userData } = useContext(UserContext);
  const history = useHistory();

  // redirect if user is'nt logged in
  useEffect(() => {
    if (!userData.user) {
      history.push("/");
    }
  });

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
