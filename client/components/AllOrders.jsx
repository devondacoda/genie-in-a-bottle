import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchOrders } from '../store/order';


class AllOrders extends Component {
  render() {
    const { orders } = this.props;
    return (
      <div className="text-center">
        {
          orders.length && orders.map(order =>
        (
          <li className="my-3" key={order.id}>
            <h3>Order Status: <span className="order-status"> {order.status} </span></h3>
            <h4>Total Price: $ {order.total}</h4>
            <h4 className="mb-5">Date of Purchase: {order.time}</h4>
          </li>

        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({ orders: state.order.pastOrders });
const mapDispatch = dispatch => ({
  fetchOrders() {
    dispatch(fetchOrders());
  },
});
export default connect(mapStateToProps, mapDispatch)(AllOrders);
