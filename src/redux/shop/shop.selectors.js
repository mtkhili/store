import { createSelector } from 'reselect';

const selectShop = state => state.shop; //state passed by mapStateToProps

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections //collections : from reducer its an array of objet [hats:{...}, jackrt:...]
);

//for shop page
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
  //convert objet to array in order to use map
  //our data : {hats: items, jacket:items}
  //Object.keys(collections) : turn the collection into a new array with key value ['hats','jacket'....]
  //map : return an array with the value of the each key e [itemsJacket, itemsHats ....] inside collections
  //we did it bz we need to use map on an array not an array of objet
);

//for nusting page
export const selectCollection = collectionUrlParam => //passed by mapStateToProps ex hats
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );
