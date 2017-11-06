// Add orders to index, and put a get request in the API's (/user/:userId)


import axios from 'axios';

// Action Types
const GET_ORDERS = 'GET_ORDERS';

// Action Creators
const getOrders = orders => ({ type: GET_ORDER, orders });

// Thunks
export const fetchOrders = userId =>
  dispatch =>
    axios.get(`/api/orders/user/${userId}`)
      .then(res =>
        dispatch(getOrders(res.data)))
      .catch(err => console.log(err));

// initial state

const defaultOrders = [];

// Reducer

export default function (state = defaultOrders, action) {
  switch (action.type) {
    case GET_ORDERS:
      return action.orders;
    default:
      return state;
  }
}
