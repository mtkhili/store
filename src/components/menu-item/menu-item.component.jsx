import React from 'react';
import styles from './menu-item.module.css';

const MenuItem = ({title, imageUrl, height}) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`,
        height: `${height}px`
    }}
    className={styles.menuitem}>
     <div className={styles.content}>
        <h1 className={styles.title}>{title.toUpperCase()}</h1>
        <span className={styles.subtitle}>SHOP NOW</span>
     </div>
    </div>
);

export default MenuItem;