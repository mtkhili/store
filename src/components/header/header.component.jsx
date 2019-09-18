import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/crown.svg';
import styles from './header.modele.css';

const Header = () => (

        <div className={styles.header}>

            <Link to='/' className={styles.logocontainer}>
                <img className={styles.logo} src={logo} alt="Logo" />;
            </Link>
           
            <div className={styles.options}>
                <Link to='/shop' className={styles.option}>SHOP</Link>
                <Link to='/shop' className={styles.option}>CONTACT</Link>
            </div>

        </div>
   
)

export default Header;



