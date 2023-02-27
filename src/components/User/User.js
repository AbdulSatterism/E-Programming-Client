import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { UserContext } from '../../context/AuthContext';



const User = () => {

    const { user } = useContext(UserContext);
    const [name, setName] = useState(user?.displayName);

    const handleSubmit = event => {
        event.preventDefault();

    }

    const handleNameChange = event => {
        setName(event.target.value)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control readOnly defaultValue={user?.email} type="email" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Your Name</Form.Label>
                <Form.Control onChange={handleNameChange} defaultValue={name} type="text" placeholder="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default User;