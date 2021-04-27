import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => (
        <Navbar className="justify-content-between" bg="dark" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="#home">Climatowns</Navbar.Brand>
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about-us">Favorites</Nav.Link>
            </Nav>
        </Navbar>  
)

export default Header;