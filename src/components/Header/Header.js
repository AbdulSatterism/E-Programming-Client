import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/AuthContext';
import './Header.css'


const Header = () => {
    const { user, logOut } = useContext(UserContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

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
                        <Link to='/about'>About</Link>
                        {
                            user?.uid ?
                                <>
                                    <Link>{user?.email}</Link>
                                    <button onClick={handleLogOut}>Log Out</button>
                                </>
                                :
                                <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='register'>Register</Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;