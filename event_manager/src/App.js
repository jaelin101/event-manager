import React from 'react';
import './App.css';
import TopBar from './components/shared/TopBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NewEvent from './components/main/NewEvent';
import Login from './components/main/Login';
import Home from './components/main/Home';
import ViewEvents from './components/main/ViewEvents';
import Admin from './components/admin/Admin';
import ClientEvents from './components/main/ClientEvents';


class App extends React.Component {

  render() {
    return (
      <Router>
      <div className="bg">
        <div id="wrapper" className="toggled">
          <div className="overlay"></div>
          <Switch>
              <Route path="/new-event">
                <TopBar loggedIn />
                <NewEvent />
              </Route>

              <Route path="/all-events">
                <TopBar loggedIn />
                <ViewEvents />
              </Route>

              <Route path="/my-events">
                <TopBar loggedIn />
                <ClientEvents />
              </Route>

              <Route path="/admin">
                <TopBar loggedIn />
                <Admin />
              </Route>

              <Route path="/home">
                <TopBar loggedIn />
                <Home />
              </Route>

              <Route path="/">
                <Login/>
              </Route>
          </Switch>
        </div>
      </div>
      </Router>
    );
  }
}
export default App;
