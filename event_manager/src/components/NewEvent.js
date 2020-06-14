import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl, Col } from 'react-bootstrap';

class NewEvent extends React.Component {


  render() {
    return (
      <div>
        <p>New event tab</p>
        <Form>
          <Form.Group controlId="formEventTitle">
            <Form.Label>Event Title</Form.Label>
            <Form.Control placeholder="What is your event called?" />
          </Form.Group>

          <Form.Group controlId="formHostName">
            <Form.Label>Host Name</Form.Label>
            <Form.Control placeholder="Who is hosting the event?" />
          </Form.Group>

          <Form.Group controlId="formEventDate">
            <Form.Label>Event Date</Form.Label>
            <Form.Control type="date" placeholder="MM/DD/YY" />
          </Form.Group>

          <Form.Group controlId="formRegistrationLink">
            <Form.Label>Registration Link</Form.Label>
            <Form.Control placeholder="Where can attendees register?" />
          </Form.Group>

          <Form.Group controlId="formEventDescription">
            <Form.Label>Event Description</Form.Label>
            <Form.Control as="textarea" rows="3" placeholder="Describe your event" />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
export default NewEvent;