import React from 'react';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
const Navigation = () => {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand href="home">Navbar</Navbar.Brand>
            
            <Nav>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/login"> Login</Link>
              </li>
                {/* <Nav.Link href="home">Home</Nav.Link>
                <Nav.Link href="contact">Contact</Nav.Link>
                <Nav.Link href="login">Login</Nav.Link> */}
            </Nav>
            
          </Container>
      </Navbar>
    </>
    </div>
  );
};

export default Navigation;