import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import NewEvent from './components/NewEvent';
import ViewEvent from './components/ViewEvents';
import Home from './components/Home';


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
