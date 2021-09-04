import React from 'react'
import { Form } from "react-bootstrap";
import './Enquiry.css'

const Formhandle = () => {
    return (
        <Form>
          <h1 className = "contact">Contact Us</h1>
  <Form.Group className="mb1-3" controlId="formGroupEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="Name"  className = "mb1-2"/>
  </Form.Group>
  <Form.Group className="mb1-3" controlId="formGroupPassword" >
    <Form.Label>Phone No.</Form.Label>
    <Form.Control type="phone" placeholder="Phone Number"  className = "mb1-2"/>
  </Form.Group>

  <Form.Group className="mb1-3" controlId="formGroupPassword" >
    <Form.Label>Email Address</Form.Label>
    <Form.Control type="email" placeholder= "Email"  className = "mb1-2"/>
  </Form.Group>
  <Form.Group className="mb1-3" controlId="formGroupPassword" >
    <Form.Label>Comment</Form.Label>
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px', marginBottom : '100px' }}
      className = "mb1-2"
    />
  </Form.Group>

  <button className = "button1"> Submit </button>
  
</Form>
    )
}
export default Formhandle
