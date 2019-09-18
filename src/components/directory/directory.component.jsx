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
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  height: 240,
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  height: 240,
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  height: 380,
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  height: 380,
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
           
        }
    }

    render(){
        return (
            <div className={styles.directorymenu}> 
            {
                this.state.sections.map(({title, imageUrl, id, height}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} height={height}  />
                ))
            }
           </div>
        )
    }
}

export default Directory;