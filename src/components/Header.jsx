import React from "react";
import { Fragment } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Spinner from 'react-bootstrap/Spinner';


const Header = () =>{
    return(
        <Fragment>
 <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
<Container>
        <Navbar.Brand >
        <Spinner className="Animacion" animation="border" size="sm" />
      <Spinner animation="border" />
      <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" />
    


        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#table">LISTA USUARIOS</Nav.Link>
            <Nav.Link href="#footer">CONTACTANOS</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    
  

              

        </Fragment>

    );
}



export default Header;
