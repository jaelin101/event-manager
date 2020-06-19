import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl, Col } from 'react-bootstrap';

class NewEvent extends React.Component {
  handleSubmit = (event) => {
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    // setValidated(true);

    alert("Event created!");
  };

  render() {
    let styles = {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '50%'
    }
    return (
      <div style={styles}>
        <h1>Create New Event</h1>
        <Form>
          <Form.Group controlId="formEventTitle">
            <Form.Label>Event Title</Form.Label>
            <Form.Control placeholder="What is the event called?" />
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
            <Form.Control as="textarea" rows="3" placeholder="Describe the event" />
          </Form.Group>

          <Button variant="outline-info" type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
export default NewEvent;