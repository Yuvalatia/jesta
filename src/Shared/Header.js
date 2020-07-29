import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./Header.css";
const Header = () => {
  return (
    <Navbar sticky="top" expand="sm">
      <Navbar.Brand className='main_font'>ג'סטה <i class="fas fa-suitcase"></i></Navbar.Brand>
      <Navbar.Toggle
        children={<i className="fas fa-align-left menu__icon"></i>}
        aria-controls="navbar-items"
      />
      <Navbar.Collapse id="navbar-items">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to={"/"} className="link">
            הרשם
          </Nav.Link>
          <Nav.Link as={Link} to={"/"} className="link">
            התחבר
          </Nav.Link>
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