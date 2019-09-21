import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      else {
        setCurrentUser(userAuth);
      }
      
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

/*
in render : jsx fun = ({js}) => ({js})

mapStateToProp : take the an objet user: key of the user.reducer (same key nomination)
mapStateToProp => props: valeur
user means the key bz the func declare first at connect
mapStateToProp : use it everytime you wanna pass a props to the component
if component funcbased ex : const Header = ({ currentUser }) => (
if component class pased we use this.props.currentUser

props currentUser: 
(user mean the key of user.reducer means the return of user.reducer: currentUser: action.payload)
user.reducer : return a objet state = {currentUser} with prop currentUser
currentUser = null or data after the action

we need currentUser in order to redirect or print out the menu 
so we pass it as a props using mapStateToProp -> call user.reducer by the key user
user.reducer or user return objet state with currentUser
in load : currentUser = null


mapDispatchToProps runs first in load if there is no user conected --> payload = null
currentUser: action.payload if there is payload then currentUser:new state

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
}); another way to access 
*/
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

/*
mapDispatchToProps : to call an action and pass the data(state) the payload
user => dispatch(setCurrentUser(user)) 
1- user => is a objet that is gonna represente the data,. in load = null 
2- dispatch(setCurrentUser(user)) : 
2-1. setCurrentUser: action imported in the top which related to user.reducer by SET_CURRENT_USER
2-2. setCurrentUser(user) : user is the first data objet user =>  func(user) ..dispatch(action(user))
3- put this action in a props setCurrentUser ex: setCurrentUser = user => dispatch(setCurrentUser(user))

the props setCurrentUser. we call it when we wanna change a state like setState by passing the new state
ex : setCurrentUser(new state) auto call the user.reducer related and return the new state
in this ex currentUser which we use it to in component header just by passing it as props in 
header component by the same methode connect --> mapStateToProp or 
this.props.currentUser for print out menu or redirect

mapDispatchToProps : when we have a change state

*/
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
