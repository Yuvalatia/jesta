import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

/* import Activity from "./Activity";
 */ import Myjobs from "./Myjobs";

import DefaultUserPicture from "../../Assets/Images/default_user_picture.png";

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
              <h2>{userData.user && userData.user.fullname}, שלום</h2>
            </div>
            <Tabs defaultActiveKey="activity" id="uncontrolled-tab-example">
              <Tab eventKey="activity" title="פרופיל משתמש">
                <div className="profile__userStats main_font">
                  <img
                    src={DefaultUserPicture}
                    alt="user default"
                    className="userImg"
                  />
                  <h2>{userData.user && userData.user.fullname}</h2>
                  <h4 className="title">אימייל</h4>
                  <span className="details">
                    {userData.user && userData.user.email}
                  </span>
                  <h4 className="title">תאריך לידה</h4>
                  <span className="details">
                    {userData.user && userData.user.birth}
                  </span>
                  <h4 className="title">פלאפון</h4>
                  <span className="details">
                    {userData.user && userData.user.phone}
                  </span>
                </div>
              </Tab>
              <Tab eventKey="myjobs" title="העבודות שלי">
                <Myjobs />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
