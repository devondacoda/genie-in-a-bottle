import axios from 'axios';
import history from '../history';

// Action Types
const GET_PREV_ORDERS = 'GET_PREV_ORDERS';
const GET_CART = 'GET_CART';
const ADD_CART_ITEM = 'ADD_CART_ITEM';

// Action Creators
const getCart = (items) => ({ type: GET_CART, items });
const addToCart = item => ({ type: ADD_CART_ITEM, item });

// initial state
const defaultOrder = {
  currentOrderList: [],
  pastOrders: [],
} 

// Reducer
export default function(state=defaultOrder, action) {
  switch(action.type) {
    case ADD_CART_ITEM:
      return action.item

    case GET_CART:
      return Object.assign({}, defaultOrder, {currentOrderList: action.items})
    default:
      return state
  };
}

// Thunks
export const addProduct = (itemId, quantity) => dispatch => {
  axios.put(`/api/products/${itemId}/add`, { quantity }).then(() => {
    history.push('/');
  })
}

export const getCurrentCart = () => dispatch => {
  axios.get('/api/orders/cart')
  .then(res => dispatch(getCart(res.data)))
}

