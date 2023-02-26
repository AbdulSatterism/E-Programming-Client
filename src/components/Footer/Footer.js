import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container text-center align-items-center'>
                <div className="row">
                    <div className="col col-lg-4 col-sm-6">
                        <h4>E-Programming Features  </h4>
                        <ul>
                            <Link>Location</Link>
                            <Link>Phones</Link>
                            <Link>Support</Link>
                        </ul>
                    </div>
                    <div className="col col-lg-4 col-sm-6">
                        <ul>
                            <Link to='/'>Home</Link>
                            <Link>About us</Link>
                            <Link>Contact</Link>
                        </ul>
                    </div>
                    <div className="col col-lg-4 col-sm-6">
                        <h4>Follow</h4>
                    </div>
                    <p>Copyright © 2023 E-Programming.com</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;