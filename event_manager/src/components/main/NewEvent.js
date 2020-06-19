import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl, Col } from 'react-bootstrap';


// // Required for side-effects
require("firebase/firestore");

// import firebase from 'firebase/firestore';

class NewEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      hostName: '',
      date: '',
      link: '',
      description: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    // Initialize Cloud Firestore through Firebase
    const firebase = require("firebase");
    firebase.initializeApp({
      apiKey: 'AIzaSyCXyPoEyKPnu9XKITCcFC6gv6PFoQ1roRc',
      authDomain: 'event-manager-8e18d.firebaseapp.com',
      projectId: 'event-manager-8e18d'
    });

    var db = firebase.firestore();

    db.collection("events").add(this.state)
      .then(function (docRef) {
        alert("Event added!");
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    // setValidated(true);

    event.preventDefault();
  };

  handleInputChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    this.setState({
      [name]: value
    });
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
            <Form.Control 
              name="title"
              placeholder="What is the event called?" 
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formHostName">
            <Form.Label>Host Name</Form.Label>
            <Form.Control 
              name="hostName"
              placeholder="Who is hosting the event?" 
              value={this.state.hostName}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formEventDate">
            <Form.Label>Event Date</Form.Label>
            <Form.Control 
              name="date"
              type="date" 
              placeholder="MM/DD/YY" 
              value={this.state.date}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formRegistrationLink">
            <Form.Label>Registration Link</Form.Label>
            <Form.Control 
              name="link"
              placeholder="Where can attendees register?" 
              value={this.state.link}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formEventDescription">
            <Form.Label>Event Description</Form.Label>
            <Form.Control 
              name="description"
              as="textarea" 
              rows="3" 
              placeholder="Describe the event" 
              value={this.state.description}
              onChange={this.handleInputChange}
            />
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