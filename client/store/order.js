import axios from 'axios';
import history from 'history';

// Action Types
const ADD_CART_ITEM = 'ADD_CART_ITEM';

// Action Creators
const addToCart = item => ({ type: ADD_CART_ITEM, item });

// Thunks
export const addProduct = (itemId, quantity) => dispatch => {
  axios.get(`/api/products/${itemId}/add`).then(() => {
    // FINISH FILTERING ORDER
  })
}

// Reducer
