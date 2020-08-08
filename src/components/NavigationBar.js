import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import navbarStyle from '../css/NavigationBar.module.css';
import data from '../data/data.json';

function NavigationBar(){
    return (
        <Navbar className={navbarStyle.navigationBar + ' fixed-top'} variant='dark' expand="lg">
        <Navbar.Brand href="/home">{data['fullname']}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
        </Nav>
        </Navbar>
    );
}

export default NavigationBar;
