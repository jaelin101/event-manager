import React from 'react';

class ClientEvents extends React.Component {


  render() {
    return (
      <div>
        <h1>My Events</h1>
        <h1></h1> {/* I forgot how to add empty space under things */}
        <h2> My Created Events</h2>
            <h4>Events I have created will show up here.</h4>
        <h1></h1> {/* I forgot how to add empty space under things */}
        <h2>My Published Events</h2>
            <h4>My events that have been published will show up here.</h4>
      </div>
    );
  }
}
export default ClientEvents;