import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'


function NavigationBar(){
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link1">Link 1</Nav.Link>
            <Nav.Link href="#link2">Link 2</Nav.Link>
        </Nav>
        <Nav className="ml-auto" >
            <Nav.Link href="#link3">Contacts</Nav.Link>
        </Nav>
        </Navbar>
    );
}

export default NavigationBar;
