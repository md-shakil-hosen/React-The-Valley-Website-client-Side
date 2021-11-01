import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./CreateNewEvent.css";

const CreateNewEvent = () => {
  const [updateEvent, setUpdateEvent] = useState({
    name: '',
    img: '',
    fee: '',
    des: ''
  })

  const handleAll = e => {
    const { name, value } = e.target
    setUpdateEvent({ ...updateEvent, [name]: value })
  }

  const handleEvent = e => {
    fetch('https://dry-journey-96708.herokuapp.com/card', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(updateEvent)
    }).then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('Successfully added a new Event')
        }
      })

    e.preventDefault()
  }


  return (
    <div>

      <div className="event-title text-white pt-3">
        <h4 className="fw-bold text-dark">Create New Event</h4>
        <div>
          <Form onSubmit={handleEvent} className="from w-25 mx-auto">
            <Form.Group className="mb-1 fw-bold" controlId="formGroupText">
              <Form.Label>Event Title</Form.Label>
              <Form.Control onChange={handleAll} name="name" type="text" placeholder="Enter Neme" />
            </Form.Group>
            <Form.Group className="mb-1 fw-bold" controlId="formGroupText">
              <Form.Label>Image Ulr</Form.Label>
              <Form.Control onChange={handleAll} name="img" type="text" placeholder="Set image url" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formGroupText">
              <Form.Label>Fee</Form.Label>
              <Form.Control onChange={handleAll} name="fee" type="number" placeholder="Event Fee" />
            </Form.Group>
            <Form.Group className="mb-1 fw-bold" controlId="formGroupText">
              <Form.Label>Description</Form.Label>
              <Form.Control onChange={handleAll} name="des" as="textarea" rows={3} placeholder="Event Description" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formGroupPassword">
              <Form.Control
                className="text-white submit-btn border-0 fw-bold"
                type="submit"
              />
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewEvent;
