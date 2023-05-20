import React from 'react';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Navigation = () => {
  return (
    <div>
      <>
        <Navbar bg="primary" variant="dark">
          <Container>

            <Navbar.Brand href="home">Navbar</Navbar.Brand>
            
              <Nav>
                <Nav.Link href="home">Home</Nav.Link>
                <Nav.Link href="contact">Contact</Nav.Link>
                <Nav.Link href="login">Login</Nav.Link>
            </Nav>
            
          </Container>
      </Navbar>
    </>
    </div>
  );
};

export default Navigation;