import axios from 'axios';
import history from '../history';

// Action Types
const ADD_CART_ITEM = 'ADD_CART_ITEM';

// Action Creators
const addToCart = item => ({ type: ADD_CART_ITEM, item });

// Thunks
export const addProduct = (itemId, quantity) => (dispatch) => {
  axios.put(`/api/products/${itemId}/add`, { quantity }).then(() => {
    history.push('/');
  });
};

// initial state

const defaultOrder = {
  currentOrderList: [],
  pastOrders: [],

};

// Reducer


export default function (state = {}, action) {
  switch (action.type) {
    case ADD_CART_ITEM:
      return action.item;
    default:
      return state;
  }
}
