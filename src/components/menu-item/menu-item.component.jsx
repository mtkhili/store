import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './menu-item.module.css';

const MenuItem = ({title, imageUrl, height, linkUrl, history, match }) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`,
        height: `${height}px`
    }}
    className={styles.menuitem}
    onClick = {() => history.push(`${match.url}${linkUrl}`)}
    >
     <div className={styles.content}>
        <h1 className={styles.title}>{title.toUpperCase()}</h1>
        <span className={styles.subtitle}>SHOP NOW</span>
     </div>
    </div>
);

export default withRouter(MenuItem);