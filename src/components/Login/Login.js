import React from 'react';
import './Login.css';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/AuthContext';
import { useContext } from 'react';


const Login = () => {

    const { signInUser } = useContext(UserContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })

    }
    return (
        <div className='register-page container'>
            <div className="register-form">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>

                    <p>New User? please.. <Link to='/register'>Register</Link> </p>

                    <button type="submit">
                        Login
                    </button>

                </Form>
            </div>
        </div>
    );
};

export default Login;