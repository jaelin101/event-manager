// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import logo from '../../images/toc-long-logo.png';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

// Configure Firebase.
const config = {
    apiKey: 'AIzaSyCXyPoEyKPnu9XKITCcFC6gv6PFoQ1roRc',
    authDomain: 'event-manager-8e18d.firebaseapp.com',
    projectId: 'event-manager-8e18d',
};

firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /home after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/home',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{ 
      return <Redirect to="/home"/>
    }).catch((error) => {
        console.log(error);
      });
  }


  render() {
    return (
      
      <div className="container">
        <div className="card bg-light" style={{ marginTop: "3em" }}>
          <img className="mx-auto" src={logo} style={{ width: "50%", marginTop: "2em" }} alt="ToC Logo" />
          <h1 className="mx-auto" style={{ color: "#bf4d24", marginTop: ".6em" }}>Event Manager</h1>
          <article className="card-body mx-auto" style={{ "max-width": "400px" }}>
            <p className="card-title mt-2 text-center">Please sign in</p>
            <form>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                </div>
                <input 
                  name="email" 
                  className="form-control" 
                  placeholder="Email address" 
                  type="email" 
                  onChange={this.handleChange}
                  value={this.state.email}
                  />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                </div>
                <input 
                  name="password" 
                  className="form-control" 
                  placeholder="Password" 
                  type="password" 
                  onChange={this.handleChange}
                  value={this.state.password}
                  />
              </div>
              <div className="form-group">
                <button onClick={this.login} className="btn btn-primary btn-block"> Sign In  </button>
              </div>
              <p className="mt-3 text-muted">Don't have an account? <a href="/register">Register</a></p>
            </form>
            <p className="divider-text mx-auto">
              <span className="bg-light">OR</span>
            </p>
            <div style={{ width: '100%', textAlign: 'center' }}>Sign-in with Google or Facebook</div>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          </article>
        </div>
      </div>
    );
  }
}

export default Login;