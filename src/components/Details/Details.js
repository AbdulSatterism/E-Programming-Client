import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import './Details.css';

const Details = () => {
    const detailsInfo = useLoaderData()
    const { img, name, details } = detailsInfo;
    return (
        <div className=''>
            <div className="sidebar">
                <Link className="active" to="/">Home</Link>
                <Link to="/user">User</Link>
                <Link to="/about">About</Link>
            </div>

            <div className="content container">
                <div className="card mb-3  mt-5" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">{details}</p>

                                <Link to='/checkout'>
                                    <button className='checkout'>CheckOut <FaShoppingCart></FaShoppingCart></button>

                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;