import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; //call conect to get the redux state

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

/*
we dont have a change state but we nned a props to print out sign in or out
of we dont have any mapDispatchToProps then we cant accee to currentUser: action.payload like the App.js
bz its always mapDispatchToProps first and mapStateToProps get the return of the mapDispatchToProps.


in this case we have access to the state.key user (user.reducer) . currentser and verify if true sign out
else sign in

anothe way to access
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});


*/
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});



export default connect(mapStateToProps)(Header);
