import axios from 'axios';
import history from '../history';

// Action Types
const GET_ORDERS = 'GET_ORDERS';
const GET_CART = 'GET_CART';
const ADD_CART_ITEM = 'ADD_CART_ITEM';

// Action Creators
const addToCart = item => ({ type: ADD_CART_ITEM, item });
const getCart = items => ({ type: GET_CART, items });
const getOrders = orders => ({ type: GET_ORDERS, orders });

// initial state
const defaultOrder = {
  cart: [],
  pastOrders: [],
};

// Reducer
export default function (state = defaultOrder, action) {
  switch (action.type) {
    case ADD_CART_ITEM:
      return Object.assign({}, state, { cart: [...state.cart, action.item] });

    case GET_CART:
      return Object.assign({}, state, { cart: action.items });
    
    case GET_ORDERS:
      return Object.assign({}, state, { pastOrders: action.orders });
    
    default:
      return state;
  }
}

// Thunks
export const addProduct = (itemId, quantity) => (dispatch) => {
  axios.put(`/api/products/${itemId}/add`, { quantity })
    .then((res) => {
      dispatch(addToCart(res.data));
    })
    .then(() => {
      history.push('/');
    });
};

export const getCurrentCart = () => (dispatch) => {
  axios.get('/api/orders/cart')
    .then(res => dispatch(getCart(res.data)));
};

export const fetchOrders = userId =>
  dispatch =>
    axios.get(`/api/orders/user/${userId}`)
      .then(res =>
        dispatch(getOrders(res.data)))
      .catch(err => console.log(err));
