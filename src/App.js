import React, { Component } from 'react';
import HomePage from './pages/homepage/homePage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-up-page/sign-in-up-page.component';
import {Route, Switch} from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } 
      else {
        this.setState({ currentUser: userAuth });
      }

    });
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
          <Header currentUser = {this.state.currentUser} />

          <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route exact path='/shop' component={ShopPage}></Route>
            <Route exact path='/shop' component={ShopPage}></Route>
            <Route exact path='/signin' component={SignInAndSignUp}></Route>
          </Switch>

          
      </div>
    );
  }
}

export default App;
