import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import styles from './directory.module.css';

class Directory extends React.Component {

    constructor() {
        super();   
        this.state = {
             sections : [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  height: 240,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  height: 240,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  height: 240,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  id: 4,
                  height: 380,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  id: 5,
                  height: 380,
                  linkUrl: 'shop/mens'
                }
              ]
           
        }
    }

    render(){
        return (
            <div className={styles.directorymenu}> 
            {
                this.state.sections.map(({id, ...otherSectionPros}) => (
                    <MenuItem key={id} {...otherSectionPros}  />
                ))
            }
            
           </div>
        )
    }
}

export default Directory;