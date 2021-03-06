import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl, Col } from 'react-bootstrap';
import './TopBar.css';

class TopBar extends React.Component {


  render() {

    const { loggedIn, isAdmin } = this.props;

    return (
      <div className="container">
        <Navbar className="navbar" bg="white" variant="light">
          <Navbar.Brand href="/home" style={{ color: "#bf4d24", fontSize: "25px" }}>Event Manager</Navbar.Brand>
          { loggedIn && (
            <Nav fill className="navlinks justify-content-end">
              {/* <Nav.Link href="/home" style={{ color: "#bf4d24" }}>Home</Nav.Link> */}
              <Nav.Link href="/new-event" style={{ color: "#bf4d24" }}>New Event</Nav.Link>
              <Nav.Link disabled href="/my-events" style={{ color: "#bf4d24" }}>My Events</Nav.Link>
              {/* <Nav.Link href="/all-events" style={{ color: "#bf4d24" }}>All Events</Nav.Link>
              <Nav.Link href="/admin" style={{ color: "#bf4d24" }}>Admin</Nav.Link> */}
              <Nav.Link href="https://techsofcolor.org" style={{ color: "#bf4d24" }}>ToC Site</Nav.Link>
            </Nav>
          )}
        </Navbar>
        <hr />
      </div>

    );
  }
}
export default TopBar;