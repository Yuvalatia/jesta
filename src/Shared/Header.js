import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import UserContext from "../context/UserContext";

import "./Header.css";
const Header = () => {
  const history = useHistory();
  const { userData, setUserData } = useContext(UserContext);

  const logOutHandler = () => {
    setUserData({ token: null, user: null });
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }
    history.push("/");
  };

  return (
    <Navbar sticky="top" expand="sm">
      <Navbar.Brand className="main_font">
        <Link to={"/"} className="link">
          ג'סטה <i class="fas fa-suitcase"></i>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        children={<i className="fas fa-align-left menu__icon"></i>}
        aria-controls="navbar-items"
      />
      <Navbar.Collapse id="navbar-items">
        <Nav className="mr-auto">
          {userData.user ? (
            <React.Fragment>
              <Nav.Link onClick={() => logOutHandler()} className="link">
                התנתק <FontAwesome name="sign-out-alt" />
              </Nav.Link>
              <Nav.Link as={Link} to={"/profile"} className="link">
                {userData.user.fullname} ,שלום
              </Nav.Link>
            </React.Fragment>
          ) : (
            <Nav.Link as={Link} to={"/auth"} className="link">
              הרשם / התחבר
            </Nav.Link>
          )}
        </Nav>
        <Nav>
          <Nav.Link as={Link} to={"/about"} className="link">
            אודות
          </Nav.Link>
          <Nav.Link as={Link} to={"/jobs"} className="link">
            עבודות
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
