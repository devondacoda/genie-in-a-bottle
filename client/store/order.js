import axios from 'axios';
import history from '../history';

// Action Types
const GET_ORDERS = 'GET_ORDERS';
const GET_CART = 'GET_CART';
const ADD_CART_ITEM = 'ADD_CART_ITEM';
const SUBMIT_ORDER = 'SUBMIT_ORDER';

// Action Creators
const addToCart = item => ({ type: ADD_CART_ITEM, item });
const getCart = cart => ({ type: GET_CART, cart });
const getOrders = orders => ({ type: GET_ORDERS, orders });
const submitOrder = (newCart) => ({ type: SUBMIT_ORDER, newCart })

// initial state
const defaultOrder = {
  cart: {},
  pastOrders: [],
};

// Reducer
export default function (state = defaultOrder, action) {
  switch (action.type) {
    case ADD_CART_ITEM:
      return Object.assign({}, state, { cart: [...state.cart, action.item] });

    case GET_CART:
      return Object.assign({}, state, { cart: action.cart });
    
    case GET_ORDERS:
      return Object.assign({}, state, { pastOrders: action.orders });

    case SUBMIT_ORDER:
      return Object.assign({}, state, { cart: action.newCart, pastOrders: [...state.pastOrders, state.cart]})
    
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
    .then(res => {
      console.log('******res', res)
      dispatch(getCart(res.data))});
};

export const fetchOrders = () =>
  dispatch =>
    axios.get(`/api/orders/user/orders`)
      .then(res => {
        dispatch(getOrders(res.data))})
      .catch(err => console.log(err));

export const completeCheckout = () => (dispatch) => {
  axios.put(`/api/orders/user/orders`)
    .then((res) => {
      console.log('res*****', res)
      dispatch(submitOrder(res.data))
    })
}