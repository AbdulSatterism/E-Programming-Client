import React from 'react';
import { FaFacebook, FaGithub, FaHandsHelping, FaLocationArrow, FaPhone, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container text-center align-items-center'>
                <div className="row">

                    <div className="col col-lg-4 col-sm-6">
                        <h4>E-Programming Features  </h4>
                        <p><FaLocationArrow></FaLocationArrow> <Link>Location</Link></p>
                        <p><FaPhoneAlt></FaPhoneAlt> <Link>Phones</Link></p>
                        <p><FaHandsHelping></FaHandsHelping> <Link>Support</Link></p>

                    </div>
                    <div className="col col-lg-4 col-sm-6">

                        <p><Link to='/'>Home</Link></p>
                        <p><Link>About us</Link></p>
                        <p><Link>Contact</Link></p>


                    </div>
                    <div className="col col-lg-4 col-sm-6">
                        <h4>Follow</h4>
                        <p><FaFacebook></FaFacebook> Facebook</p>
                        <p><FaTwitter></FaTwitter> Twitter</p>
                        <p><FaGithub></FaGithub> GitHub</p>

                    </div>
                </div>
                <p>Copyright © 2023 E-Programming.com</p>
            </div>
        </div>

    );
};

export default Footer;