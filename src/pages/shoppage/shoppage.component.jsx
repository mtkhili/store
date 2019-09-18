import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import styles from './shoppage.modele.css';

class ShopPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { collections : SHOP_DATA }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className={styles.shopepage}>
                {
                        collections.map(({id, ...otherCollectionPros}) => (
                        <CollectionPreview key={id} {...otherCollectionPros} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;