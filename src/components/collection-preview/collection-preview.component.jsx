import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import styles from './collection-preview.modele.css';

const CollectionPreview = ({title, items}) => (

    <div className={styles.collectionpreview}>
        <h1 className={styles.title}>{title.toUpperCase()}</h1>
        <div className={styles.preview}>
            {
                items.filter((item, idx) => idx < 4)
                .map(({id, ...otherItemsProps}) => (
                    <CollectionItem key={id} {...otherItemsProps} />
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;