import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import styles from './sign-in-up-page.modele.css';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUp = () => (
    <div className={styles.sign}>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUp;





