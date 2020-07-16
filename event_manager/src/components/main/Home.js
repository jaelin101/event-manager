import React from 'react';
import firebase from 'firebase';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Header from '../shared/Header';
import TopBar from '../shared/TopBar';



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        firebase.auth().signOut().then(()=> console.log('logged out')).then(()=>{ 
            const { history } = this.props;
            history.push("/");
          });
    }

    render() {
        return (
            <> 
            <Header />
            <TopBar loggedIn />

            <div className="container">
        
                <div style={{ margin: "50px" }}>
                    <h1>Welcome to the Event Manager!!</h1>
                    <p> This web application allows users to create and view events happening in the Atlanta Black Tech community. </p>
                </div>

                <Button variant="outline-info" onClick={this.logout}>
                    Logout
                </Button>

            </div>
            </>
        );
    }
}

export default Home;