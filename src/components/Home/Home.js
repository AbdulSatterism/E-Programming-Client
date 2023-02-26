import React from 'react';
import './Home.css';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className="col col-lg-6 col-sm-12 home-container">
                    <h1><span className='welcome'>Welcome</span> <br /> <span className='e-pro'>E-Programming With Fun</span></h1>
                    <p className='info'>
                        Personalized, fun, and interactive learning process. Enjoy our E-Programming courses to learn Web development with  HTML, CSS, JavaScript ,React JS, Node js, Mongo DB, Firebase And Others things.
                    </p>
                    <Link to='/courses'>
                        <button>Courses <FaArrowAltCircleRight></FaArrowAltCircleRight> </button>
                    </Link>
                </div>
                <div className=" col col-lg-6 col-sm-12 image-content">
                    <img src="https://images.unsplash.com/photo-1542546068979-b6affb46ea8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1tZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;