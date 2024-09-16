import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import link from "../assets/link.svg";
import tweet from "../assets/twitter.svg";
import { Nav } from "react-bootstrap";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="wis">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="head">
          <Navbar.Brand href="#home" className="logo">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" id="hope">
              {" "}
              <a href=" #home" className="lin">
                Home
              </a>
              <a href="#about" className="lin">
                About
              </a>
              <a href="#techs" className="lin">
                Techstack
              </a>
              <a href="#project" className="lin">
                Projects
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
