import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Frontend from './components/Frontend';
import Backend from './components/Backend';
import Databases from './components/Databases';
import './App.scss';

class App extends Component {
  render() {
    return (
      <HashRouter>
      <Switch>
      <div className="App">

      <Header />

      <Route exact path="/" component={Home}></Route>
      <Route path="/frontend" component={Frontend}></Route>
      <Route path="/backend" component={Backend}></Route>
      <Route path="/database" component={Databases}></Route>

      </div>
      </Switch>
      </HashRouter>
    );
  }
}

export default App;
