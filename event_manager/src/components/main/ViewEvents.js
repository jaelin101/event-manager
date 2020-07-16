import React from 'react';
import Header from '../shared/Header';
import TopBar from '../shared/TopBar';

class ViewEvents extends React.Component {


  render() {
    return (
      <>
      <Header />
      <TopBar loggedIn />

      <div className="container">
        <h1>All Events</h1>
        
      </div>
      </>
    );
  }
}
export default ViewEvents;