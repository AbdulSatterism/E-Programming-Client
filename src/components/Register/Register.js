import React from 'react';
import './Register.css'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/AuthContext';


const Register = () => {

    const { createUser } = useContext(UserContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div className='register-page container'>
            <div className="register-form">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhoto">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control name='photoURL' type="text" placeholder="Photo url" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>

                    <p>Already have an account? please.. <Link to='/login'>Login</Link> </p>

                    <button type="submit">
                        Register
                    </button>

                </Form>
            </div>
        </div>
    );
};

export default Register;