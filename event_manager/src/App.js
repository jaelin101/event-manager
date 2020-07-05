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


class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="bg">
          <div id="wrapper" className="toggled">
            <div className="overlay"></div>
            <Switch>
              <Route path="/new-event">
                <Header />
                <TopBar loggedIn />
                <NewEvent />
              </Route>

              <Route path="/all-events">
                <Header/>
                <TopBar loggedIn />
                <ViewEvents />
              </Route>

              <Route path="/my-events">
                <Header />
                <TopBar loggedIn />
                <ClientEvents />
              </Route>

              <Route path="/admin">
                <Header />  
                <TopBar loggedIn />
                <Admin />
              </Route>

              <Route path="/home">
                <Header />
                <TopBar loggedIn />
                <Home />
              </Route>

              <Route path="/register">
                <Register />
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
