import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FontAwesome from "react-fontawesome";
import Container from "react-bootstrap/Container";
// Context
import UserContext from "../../context/UserContext";
// Hooks
import useGlobalLoader from "../../hooks/global-loader";
import useErrorHandler from "../../hooks/error-handler";
// Services
import { userLogin, userRegister } from "../../services/user.service";

import "./Auth.css";
const Auth = (props) => {
  const history = useHistory();
  const { userData, setUserData } = useContext(UserContext);
  const [loading, showLoader, hideLoader] = useGlobalLoader();
  const [error, showError] = useErrorHandler();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [registerForm, setRegisterForm] = useState({
    fullname: "",
    birth: "",
    email: "",
    password: "",
    re_password: "",
    phone: "",
    terms: false,
    image: "",
  });

  // redirect if user is logged in
  useEffect(() => {
    if (userData.user) {
      history.push("/");
    }
  });

  const LoginFormSent = async (e) => {
    e.preventDefault();
    showLoader();
    try {
      const response = await userLogin(loginForm);
      localStorage.setItem("token", response.token);
      setUserData({ token: response.token, user: response.user });
      hideLoader();
      history.push("/profile");
    } catch (err) {
      showError(err.response.data.message);
      hideLoader();
    }
  };

  const LoginInputChangeHandler = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const RegisterFormSent = async (e) => {
    e.preventDefault();
    if (registerFormvalidation()) {
      showLoader();
      try {
        const response = await userRegister(registerForm);
        localStorage.setItem("token", response.token);
        setUserData({ token: response.token, user: response.user });
        hideLoader();
        history.push("/profile");
      } catch (err) {
        showError(err.response.data.message);
        hideLoader();
      }
    }
  };

  const RegisterInputChangeHandler = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]:
        e.target.name === "terms" ? !registerForm.terms : e.target.value,
    });
  };

  const registerFormvalidation = () => {
    // fullname check
    if (!registerForm.fullname || registerForm.fullname.length < 4) {
      showError("שם משתמש צריך להכיל לפחות 4 תווים");
      return false;
    }
    // birth check
    if (!registerForm.birth) {
      showError("נא למלא תאריך לידה");
      return false;
    }
    //email
    if (!registerForm.email) {
      showError("נא למלא אימייל");
      return false;
    }
    // password check
    if (
      !registerForm.password ||
      registerForm.password < 6 ||
      registerForm.password !== registerForm.re_password
    ) {
      showError("סיסמאות צריכות להיות מעל 6 תווים וזהות");
      return false;
    }
    // phone check
    if (
      !registerForm.phone ||
      registerForm.phone.length !== 10 ||
      isNaN(registerForm.phone)
    ) {
      showError("מספר פלאפון לצריך להכיל 10 מספרים");
      return false;
    }
    // terms check
    if (!registerForm.terms) {
      showError("נא לאשר את התנאים");
      return false;
    }
    return true;
  };

  return (
    <React.Fragment>
      {error}
      {loading}
      <div className="auth__container main_font">
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <Card className="auth__card__container">
                <Card.Header className="auth__card__title">
                  <h1>
                    התחברות <FontAwesome name="user-lock" />
                  </h1>
                </Card.Header>
                <Card.Body className="auth__card__body">
                  <Card.Title>התחברות</Card.Title>
                  <form onSubmit={LoginFormSent}>
                    <label>דוא"ל</label>
                    <input
                      type="email"
                      value={loginForm.email}
                      name="email"
                      onChange={LoginInputChangeHandler}
                    />
                    <label>סיסמה</label>
                    <input
                      type="password"
                      value={loginForm.password}
                      name="password"
                      onChange={LoginInputChangeHandler}
                    />
                    <button type="submit">התחבר</button>
                  </form>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card md={6} xs={12} className="auth__card__container">
                <Card.Header className="auth__card__title">
                  <h1>
                    הרשמה <FontAwesome name="user-plus" />
                  </h1>
                </Card.Header>
                <Card.Body className="auth__card__body">
                  <Card.Title>הרשמה</Card.Title>
                  <form onSubmit={RegisterFormSent}>
                    <label>שם מלא</label>
                    <input
                      type="text"
                      value={registerForm.fullname}
                      name="fullname"
                      onChange={RegisterInputChangeHandler}
                    />
                    <label>תאריך לידה</label>
                    <input
                      type="date"
                      value={registerForm.date}
                      name="birth"
                      onChange={RegisterInputChangeHandler}
                    />
                    <label>דוא"ל</label>
                    <input
                      type="email"
                      value={registerForm.email}
                      name="email"
                      onChange={RegisterInputChangeHandler}
                    />
                    <label>סיסמה</label>
                    <input
                      type="password"
                      value={registerForm.password}
                      name="password"
                      onChange={RegisterInputChangeHandler}
                    />
                    <label>סיסמה שוב</label>
                    <input
                      type="password"
                      value={registerForm.re_password}
                      name="re_password"
                      onChange={RegisterInputChangeHandler}
                    />
                    <label>מספר פלאפון</label>
                    <input
                      type="text"
                      value={registerForm.phone}
                      name="phone"
                      onChange={RegisterInputChangeHandler}
                    />
                    <div className="auth__card__body__terms">
                      <span>מאשר את התקנון</span>
                      <input
                        name="terms"
                        type="checkbox"
                        checked={registerForm.terms}
                        onChange={RegisterInputChangeHandler}
                      />
                    </div>
                    <button type="submit">הרשם</button>
                  </form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Auth;
