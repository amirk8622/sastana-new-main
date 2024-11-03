// NavBar.js
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './Navbar.css';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar"> {/* Apply custom CSS class */}
      <Container fluid>
        <Navbar.Brand href="#" className="sastana">
          <img
            src="https://i.tracxn.com/logo/company/sastana_3cb07932-4197-40d8-a540-9380fce947ae.png?height=120&width=120"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />{' '}
          Sastana
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
