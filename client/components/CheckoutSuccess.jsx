import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchOrders } from '../store/order';


function CheckoutSuccess(props) {
  const { orders } = props;
  return (
    <div>
      <h1 className="text-center"> ORDER SUCCESSFUL HOMIE </h1>
      <div>
        <li>
          <h2>Your Order</h2>
          <h3>Order Status:  {orders[orders.length-1].status}</h3>
          <h4>Total Price:  {orders[orders.length-1].total}</h4>
          <h4>Date of Purchase:  {orders[orders.length-1].time}</h4>
        </li>
      </div>
    </div>
  );
}


const mapStateToProps = state => ({ orders: state.order.pastOrders });
const mapDispatch = (dispatch, ownProps) => ({
  fetchOrders() {
    console.log('dispatching fetch orders from front');
    dispatch(fetchOrders());
  },
});
export default connect(mapStateToProps, mapDispatch)(CheckoutSuccess);
