import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FontAwesome from "react-fontawesome";
import Container from "react-bootstrap/Container";

import UserContext from "../../context/UserContext";
import { userLogin } from "../../services/user.service";

import "./Auth.css";
const Auth = (props) => {
  const history = useHistory();
  const { userData, setUserData } = useContext(UserContext);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [registerForm, setRegisterForm] = useState({
    fullname: "",
    date: "",
    email: "",
    password: "",
    re_password: "",
    phone: "",
    terms: false,
  });

  // redirect if user is logged in
  useEffect(() => {
    if (userData.user) {
      history.push("/");
    }
  });

  const LoginFormSent = async (e) => {
    e.preventDefault();
    try {
      const response = await userLogin(loginForm);
      localStorage.setItem("token", response.token);
      setUserData({ token: response.token, user: response.user });
      history.push("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  const LoginInputChangeHandler = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const RegisterFormSent = (e) => {
    e.preventDefault();
    console.log(registerForm);
  };

  const RegisterInputChangeHandler = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]:
        e.target.name === "terms" ? !registerForm.terms : e.target.value,
    });
  };

  return (
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
                    name="date"
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
  );
};

export default Auth;
