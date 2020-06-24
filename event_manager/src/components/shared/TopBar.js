import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl, Col } from 'react-bootstrap';
import './TopBar.css';

class TopBar extends React.Component {


  render() {

    const { loggedIn } = this.props;

    return (
      <div>
        <Navbar className="navbar" bg="white" variant="light">
          <Navbar.Brand href="/" style={{ color: "#bf4d24", fontSize: "25px" }}>Event Manager</Navbar.Brand>
          { loggedIn && (
            <Nav className="navlinks">
              <Nav.Link href="/home" style={{ color: "#bf4d24" }}>Home</Nav.Link>
              <Nav.Link href="/new-event" style={{ color: "#bf4d24" }}>New Event</Nav.Link>
              <Nav.Link href="/all-events" style={{ color: "#bf4d24" }}>All Events</Nav.Link>
              <Nav.Link href="/my-events" style={{ color: "#bf4d24" }}>My Events</Nav.Link>
              <Nav.Link href="/admin" style={{ color: "#bf4d24" }}>Admin</Nav.Link>
            </Nav>
          )}
        </Navbar>
        <hr />
      </div>

    );
  }
}
export default TopBar;