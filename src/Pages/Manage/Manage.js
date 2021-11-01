import React, { useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import { FaTrash } from "react-icons/fa";
import "./Manage.css"
const Manage = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://dry-journey-96708.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const deleteBtn = id => {
        const confirm = window.confirm('are you sure to delete this ?')
        if (confirm) {
            fetch(`https://dry-journey-96708.herokuapp.com/users/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Seccessfully')
                        const newAllUser = orders.filter(a => a._id !== id)
                        setOrders(newAllUser)

                    }
                })
        }
    }
    return (
        <div>
            {
                (orders.length !== 0) ? <Container>
                    <h1 className="text-center">Order Management</h1>
                    <Table className='table' striped bordered hover>
                        <thead>
                            <tr>
                                <th>Event</th>
                                <th>User Name</th>
                                <th>User email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            orders.map(or => <tbody>
                                <tr>
                                    <td>{or?.title}</td>
                                    <td>{or?.name}</td>
                                    <td>{or?.email}</td>
                                    <td><FaTrash className='text-danger courser' onClick={() => deleteBtn(or._id)} /></td>
                                </tr>
                            </tbody>)
                        }
                    </Table>
                </Container> : <h1><Spinner animation="grow" variant="info" /></h1>
            }
        </div>
    );
};

export default Manage;