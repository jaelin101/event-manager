import React from 'react';
import './App.css';
import TopBar from './components/shared/TopBar';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import NewEvent from './components/main/NewEvent';
// import ViewEvent from './components/ViewEvents';
import Home from './components/main/Home';
import ViewEvents from './components/main/ViewEvents';
import Admin from './components/admin/Admin';
import ClientEvents from './components/main/ClientEvents';


class App extends React.Component {


  render() {
    return (
      <Router>
      <div class="bg">
        <div id="wrapper" className="toggled">
          <div className="overlay"></div>
          <TopBar />
          <Switch>

              <Route path="/new-event">
                <NewEvent />
              </Route>

              <Route path="/all-events">
                <ViewEvents />
              </Route>

              <Route path="/my-events">
                <ClientEvents />
              </Route>

              <Route path="/admin">
                <Admin />
              </Route>

              <Route path="/">
                <Home />
              </Route>
          </Switch>
        </div>
       

      </div>

      </Router>
    );
  }
}
export default App;
