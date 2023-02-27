import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/AuthContext';
import { FaUser } from 'react-icons/fa';
import './Header.css'
import { useState } from 'react';


const Header = () => {
    const { user, logOut } = useContext(UserContext);
    const [theme, setTheme] = useState(true)

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch((error) => console.log(error))
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
                            theme ? <button className='theme' onClick={() => setTheme(!theme)}>Dark</button>
                                :
                                <button className='theme' onClick={() => setTheme(!theme)}>light</button>
                        }
                        {
                            user?.uid ?
                                <>
                                    <Link>{user?.displayName}</Link>
                                    <Button onClick={handleLogOut}>log out</Button>
                                </>
                                :
                                <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='register'>Register</Link>
                                </>
                        }
                        <Link to='user'>
                            {
                                user?.photoURL ?
                                    <Image
                                        style={{ height: '30px' }}
                                        roundedCircle
                                        src={user?.photoURL}
                                    >

                                    </Image>
                                    :
                                    <FaUser></FaUser>
                            }
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;