import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
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
  const [showModal, setShowModal] = useState(false);
  const [newJobForm, setNewJobForm] = useState({
    description: "",
    date: "",
    location: "",
    payment: 50,
  });
  const { userData } = useContext(UserContext);
  const history = useHistory();

  // redirect if user is'nt logged in
  useEffect(() => {
    if (!userData.user) {
      history.push("/");
    }
  });

  const NewJobInputChangeHandler = (e) => {
    setNewJobForm({ ...newJobForm, [e.target.name]: e.target.value });
  };

  const newJobFormSent = async (e) => {
    e.preventDefault();
    console.log(newJobForm);
  };

  return (
    <React.Fragment>
      <div className="profile__container">
        <Container fluid>
          <Row>
            <Col></Col>
            <Col sm={12} className="profile__inner__container">
              <div className="profile__header">
                <Button
                  variant="warning"
                  onClick={() => setShowModal(!showModal)}>
                  פרסם עבודה
                </Button>
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
      <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
        <Modal.Header closeButton>
          <Modal.Title>פרסם עבודה</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={newJobFormSent}>
            <label>תיאור</label>
            <input
              type="text"
              value={newJobForm.description}
              name="description"
              onChange={NewJobInputChangeHandler}
            />
            <label>תאריך</label>
            <input
              type="date"
              value={newJobForm.date}
              name="date"
              onChange={NewJobInputChangeHandler}
            />
            <label>מיקום</label>
            <input
              type="text"
              value={newJobForm.location}
              name="location"
              onChange={NewJobInputChangeHandler}
            />
            <label>(מחיר (שקל</label>
            <input
              type="number"
              value={newJobForm.payment}
              name="payment"
              onChange={NewJobInputChangeHandler}
            />

            <button type="submit">הרשם</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(!showModal)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShowModal(!showModal)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default Profile;
