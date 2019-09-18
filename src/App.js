import React, { Component } from 'react';
import HomePage from './pages/homepage/homePage.component';
import ShopPage from './pages/shoppage/shoppage.component';

import {Route, Switch} from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route exact path='/shop' component={ShopPage}></Route>
          </Switch>
      </div>
    );
  }
}

export default App;
