import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './course.css'

const Course = ({ course }) => {
    const { name, img, price, id } = course;
    return (
        <div className='course'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='course-info'>
                <h3>{name}</h3>
                <h4>price: ${price}</h4>
                <Link to={`/details/${id}`}>
                    <button>
                        Explore <FaArrowAltCircleRight></FaArrowAltCircleRight>
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default Course;