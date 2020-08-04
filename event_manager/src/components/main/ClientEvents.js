import React from 'react';
import Header from '../shared/Header';
import TopBar from '../shared/TopBar';

class ClientEvents extends React.Component {


  render() {
    return (
      <>
      <Header />
      <TopBar loggedIn />

      <div className="container">
        <h1>My Events</h1>
        <h1></h1> {/* I forgot how to add empty space under things */}
        <h2> My Created Events</h2>
            <h4>Events I have created will show up here.</h4>
        <h1></h1> {/* I forgot how to add empty space under things */}
        <h2>My Published Events</h2>
            <h4>My events that have been published will show up here.</h4>
      </div>
      </>
    );
  }
}
export default ClientEvents;