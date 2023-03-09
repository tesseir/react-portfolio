import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

function Navigation({ setShowAboutMe, setShowPortfolio, setShowContactMe }) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Tess Eir</Navbar.Brand>
          <Nav className="me-auto">
          <Button variant="secondary" onClick={() => [setShowAboutMe(true),  setShowPortfolio(false), setShowContactMe(false)]}>About Me</Button>
          <Button variant="secondary" onClick={() => [setShowAboutMe(false),  setShowPortfolio(true), setShowContactMe(false)]}>Portfolio</Button>
          <Button variant="secondary" onClick={() => [setShowAboutMe(false),  setShowPortfolio(false), setShowContactMe(true)]}>Contact Me</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Navigation