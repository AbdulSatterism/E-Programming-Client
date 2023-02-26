import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='navbar-color'>
            <Container>
                <img src="https://t3.ftcdn.net/jpg/01/02/51/70/240_F_102517057_4Tedp0gKwCkWwu54kKni0GZ0DqIWe5MY.jpg" alt="" />
                <Link to='/'>E-Programming</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='nav-text mx-auto' >
                        <Link to='/'>Home</Link>
                        <Link to='/courses'>Courses</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='about'>About</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;