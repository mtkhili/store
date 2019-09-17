import React from 'react';
import styles from './homepage.module.css';

const HomePage = () => (

    <div className={styles.homepage}>
        <div className={styles.directorymenu}>
            <div className={styles.menuitem}>
                <div className={styles.content}>
                    <h1 className={styles.title}>HATS</h1>
                    <span className={styles.subtitle}>SHOP NOW</span>
                </div>
            </div>

            <div className={styles.menuitem}>
                <div className={styles.content}>
                    <h1 className={styles.title}>JACKETS</h1>
                    <span className={styles.subtitle}>SHOP NOW</span>
                </div>
            </div>


            <div className={styles.menuitem}>
                <div className={styles.content}>
                    <h1 className={styles.title}>SNEAKERS</h1>
                    <span className={styles.subtitle}>SHOP NOW</span>
                </div>
            </div>

            <div className={styles.menuitem}>
                <div className={styles.content}>
                    <h1 className={styles.title}>WOMEN</h1>
                    <span className={styles.subtitle}>SHOP NOW</span>
                </div>
            </div>


            <div className={styles.menuitem}>
                <div className={styles.content}>
                    <h1 className={styles.title}>MEN</h1>
                    <span className={styles.subtitle}>SHOP NOW</span>
                </div>
            </div>
         
        </div>
    </div>
)

export default HomePage;