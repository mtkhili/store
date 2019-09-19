import React from 'react';
import styles from './costum-btn.modele.css';

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (

    <button
    className={`${styles.custombtn} ${isGoogleSignIn ? styles.googlesignin : ''}`}
    {...otherProps}
    >
      {children}
    </button>

)

export default CustomButton;