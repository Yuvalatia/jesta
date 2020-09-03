import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import UserContext from "../context/UserContext";

import "./Header.css";
const Header = () => {
  const { userData, setUserData } = useContext(UserContext);

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
            <Nav.Link as={Link} to={"/profile"} className="link">
              {userData.user.fullname} ,שלום
            </Nav.Link>
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
