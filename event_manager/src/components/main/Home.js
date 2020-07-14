import React from 'react';
import firebase from 'firebase';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        firebase.auth().signOut().then(()=> console.log('logged out'));
    }

    render() {
        return (
            <div className="container">

                <div style={{ margin: "50px" }}>
                    <h1>Welcome to the Event Manager!!</h1>
                    <p> This web application allows users to create and view events happening in the Atlanta Black Tech community. </p>
                </div>

                <Button variant="outline-info" onClick={this.logout}>
                    Logout
                </Button>

            </div>
        );
    }
}

export default Home;