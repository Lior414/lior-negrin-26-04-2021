import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header(){
    return(
        <div>
            <Container>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/about-us">Contact Us</Nav.Link>
                                    <Nav.Link href="/contact-us">About Us</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
            </Container>
        </div>
    )   
}

export default Header;