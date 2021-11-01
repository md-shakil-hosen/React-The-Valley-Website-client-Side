import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Selected = () => {
    const { user } = useAuth()
    const { id } = useParams()

    const [selected, setSelected] = useState({})
    const [newUser, setNewUser] = useState({})

    useEffect(() => {
        fetch('https://dry-journey-96708.herokuapp.com/card')
            .then(res => res.json())
            .then(data => {
                const newSelected = data.find(sec => sec._id === id)
                setSelected(newSelected)
            })
    }, [])

    const handleDate = e => {
        const newDate = { ...newUser }
        newDate.date = e.target.value
        setNewUser(newDate)
    }


    const handleUserInfo = e => {

        const update = newUser
        update.title = selected.name
        update.name = user.displayName
        update.img = selected.img
        update.email = user.email
        setNewUser(update)


        fetch('https://dry-journey-96708.herokuapp.com/users', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newUser)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfull added your package')
                }
            })
        e.preventDefault()
    }

    return (
        <div>
            <h2>FilUp the Form </h2>
            <Container>
                <div className="row py-5">
                    <div className="col-12 col-md-6">
                        <img src={selected?.img} alt="" className="w-100 h-100" />
                    </div>
                    <div className="col-12 col-md-6 text-start">
                        <Form onSubmit={handleUserInfo}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Your Selected Package</Form.Label>
                                <Form.Control value={selected?.name} type="text" placeholder="Your Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control value={user?.displayName} type="text" placeholder="Your Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control value={user?.email} type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Date</Form.Label>
                                <Form.Control onChange={handleDate} type="date" placeholder="date" required />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Selected;