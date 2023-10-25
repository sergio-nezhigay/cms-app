import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = ({ tabs }) => {
  return (
    <div className="container ">
      <Navbar bg="light" expand="lg" className="px-2">
        <Navbar.Brand>
          <Nav.Link as={NavLink} to="/" className="nav-link">
            My Tabs App
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {tabs.map(({ id, title }) => (
              <Nav.Link
                key={id}
                as={NavLink}
                to={id}
                activeclassname="active"
                className="nav-link"
              >
                {title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
