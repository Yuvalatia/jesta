import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import Myjobs from "./Myjobs";
import DefaultUserPicture from "../../Assets/Images/default_user_picture.png";

// Service
import { addNewJob } from "../../services/user.service";
// Hooks
import useErrorHandler from "../../hooks/error-handler";
// Context
import UserContext from "../../context/UserContext";

import "./Profile.css";
const Profile = (props) => {
  const [error, showError] = useErrorHandler();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newJobSent, setNewJobSent] = useState(false);
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

  const closeModal = () => {
    setNewJobForm({
      description: "",
      date: "",
      location: "",
      payment: 50,
    });
    setShowModal(!showModal);
    setLoading(false);
    setNewJobSent(false);
  };

  const NewJobInputChangeHandler = (e) => {
    setNewJobForm({
      ...newJobForm,
      [e.target.name]:
        e.target.name === "payment" ? parseInt(e.target.value) : e.target.value,
    });
  };

  const newJobFormSent = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addNewJob(userData.token, newJobForm);
      setNewJobSent(true);
      setLoading(false);
    } catch (err) {
      showError(err.response.data.message);
      setLoading(false);
    }
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
      <Modal show={showModal} onHide={() => closeModal()}>
        <Modal.Header closeButton>
          <Modal.Title>פרסם עבודה</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {newJobSent ? (
            <p className="jobSent__messageText">עבודה פורסמה בהצלחה</p>
          ) : (
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
              <Button disabled={loading} variant="success" type="submit">
                {loading ? (
                  <>
                    שולח
                    <span> {"    "}</span>
                    <Spinner
                      as="span"
                      animation="border"
                      size="md"
                      role="status"
                    />
                  </>
                ) : (
                  <>פרסם עבודה</>
                )}
              </Button>
            </form>
          )}
        </Modal.Body>
      </Modal>
      {error}
    </React.Fragment>
  );
};

export default Profile;
