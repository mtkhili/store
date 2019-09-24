import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
  collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) { //we just pass type even we dont have any action
    default:
      return state;
  }
};

export default shopReducer;
