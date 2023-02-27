import React, { useState } from 'react';
import './Login.css';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';


const Login = () => {
    const [error, setError, setLoading] = useState('');

    const { signInUser, signInWithGoogle } = useContext(UserContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                // verify ok
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('your email is not verifiyed ! please verify')
                }

            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => {
                setLoading(false)
            })
    }



    const handleGoogleSignIn = () => {
        signInWithGoogle(googleProvider)
            .then((result) => {
                console.log(result.user)
            })
            .catch(error => setError(error.message))
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

                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form>
                <hr />
                <button onClick={handleGoogleSignIn}><FaGoogle></FaGoogle> Google</button>
            </div>
        </div >
    );
};

export default Login;