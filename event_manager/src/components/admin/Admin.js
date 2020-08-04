import React from 'react';
import Header from '../shared/Header';
import TopBar from '../shared/TopBar';

class Admin extends React.Component {


  render() {
    return (
      <>
      <Header />
      <TopBar loggedIn />
      <div className="container">
        <h1>Admin Page</h1>
        
      </div>
      </>
    );
  }
}
export default Admin;