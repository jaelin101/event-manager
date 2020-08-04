import React from 'react';
import './App.css';
import TopBar from './components/shared/TopBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NewEvent from './components/main/NewEvent';
import Login from './components/main/Login';
import Register from './components/main/Register';
import Home from './components/main/Home';
import ViewEvents from './components/main/ViewEvents';
import Admin from './components/admin/Admin';
import ClientEvents from './components/main/ClientEvents';
import Header from './components/shared/Header';
import firebase from 'firebase';


class App extends React.Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="bg">
          <div id="wrapper" className="toggled">
            <div className="overlay"></div>
            <Switch>
              <Route path="/new-event" component={NewEvent}/>

              <Route path="/all-events" component={ViewEvents}/>

              <Route path="/my-events" component={ClientEvents}/>

              <Route path="/admin" component={Admin}/>

              <Route path="/home" component={Home}/>

              <Route path="/register" component={Register}/>

              <Route path="/" component={Login}/>

            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
