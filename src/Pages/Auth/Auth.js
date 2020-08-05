import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FontAwesome from "react-fontawesome";
import Container from "react-bootstrap/Container";

import "./Auth.css";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login_form: {
        email: "",
        password: "",
      },
      register_form: {
        fullname: "",
        date: "",
        email: "",
        password: "",
        re_password: "",
        phone: "",
        terms: false,
      },
    };
  }

  LoginFormSent = (e) => {
    e.preventDefault();
    console.log(this.state.login_form);
  };

  LoginInputChangeHandler = (e) => {
    this.setState({
      login_form: { ...this.state.login_form, [e.target.name]: e.target.value },
    });
  };

  RegisterFormSent = (e) => {
    e.preventDefault();
    console.log(this.state.register_form);
  };

  RegisterInputChangeHandler = (e) => {
    this.setState({
      register_form: {
        ...this.state.register_form,
        [e.target.name]:
          e.target.name === "terms"
            ? !this.state.register_form.terms
            : e.target.value,
      },
    });
  };

  render() {
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
                  <form onSubmit={this.LoginFormSent}>
                    <label>דוא"ל</label>
                    <input
                      type="email"
                      value={this.state.login_form.email}
                      name="email"
                      onChange={this.LoginInputChangeHandler}
                    />
                    <label>סיסמה</label>
                    <input
                      type="password"
                      value={this.state.login_form.password}
                      name="password"
                      onChange={this.LoginInputChangeHandler}
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
                  <form onSubmit={this.RegisterFormSent}>
                    <label>שם מלא</label>
                    <input
                      type="text"
                      value={this.state.register_form.fullname}
                      name="fullname"
                      onChange={this.RegisterInputChangeHandler}
                    />
                    <label>תאריך לידה</label>
                    <input
                      type="date"
                      value={this.state.register_form.date}
                      name="date"
                      onChange={this.RegisterInputChangeHandler}
                    />
                    <label>דוא"ל</label>
                    <input
                      type="email"
                      value={this.state.register_form.email}
                      name="email"
                      onChange={this.RegisterInputChangeHandler}
                    />
                    <label>סיסמה</label>
                    <input
                      type="password"
                      value={this.state.register_form.password}
                      name="password"
                      onChange={this.RegisterInputChangeHandler}
                    />
                    <label>סיסמה שוב</label>
                    <input
                      type="password"
                      value={this.state.register_form.re_password}
                      name="re_password"
                      onChange={this.RegisterInputChangeHandler}
                    />
                    <label>מספר פלאפון</label>
                    <input
                      type="text"
                      value={this.state.register_form.phone}
                      name="phone"
                      onChange={this.RegisterInputChangeHandler}
                    />
                    <div className="auth__card__body__terms">
                      <span>מאשר את התקנון</span>
                      <input
                        name="terms"
                        type="checkbox"
                        checked={this.state.register_form.terms}
                        onChange={this.RegisterInputChangeHandler}
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
  }
}

export default Auth;
