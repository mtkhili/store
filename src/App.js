import React, { Component } from 'react';
import HomePage from './pages/homepage/homePage.component';
import {Route, Switch} from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path='/' component={HomePage}></Route>
          </Switch>
      </div>
    );
  }
}

export default App;
