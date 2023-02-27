import React from 'react';
import { Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import './CheckOut.css'

const CheckOut = () => {

    return (
        <div className='register-page container'>
            <div className="register-form">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Location</Form.Label>
                        <Form.Control name='address' type="address" placeholder="address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" />
                    </Form.Group>
                    <button onClick={() => toast.success('Your course purchases successfully')} type="submit">confirm</button>
                </Form>

            </div>
        </div >

    );
};

export default CheckOut;