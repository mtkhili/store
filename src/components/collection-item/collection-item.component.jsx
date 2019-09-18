import React from 'react';
import styles from './collection-item.modele.css';

const CollectionItem = ({id, name, price, imageUrl} ) => (
    
    <div className={styles.collectionitem}>
        <div
         className={styles.image}
         style = {{
             backgroundImage: `url(${imageUrl})`
         }}
         />

         <div className={styles.collectionfooter}>
            <span className={styles.name}>{name}</span>
            <span className={styles.price}>{price}</span>
         </div>

    </div>
)

export default CollectionItem;


