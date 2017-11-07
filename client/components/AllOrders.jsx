import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchOrders } from '../store/order';


class AllOrders extends Component {
  render() {
    const { orders } = this.props;
    console.log('mamamia',orders)
    return (
      <div>
        {
          orders.length && orders.map(order =>
        (
          <div key={order.id}>
          <li>
            <h3>Order Status:  {order.status}</h3>
            <h4>Total Price:  {order.total}</h4>
            <h4>Date of Purchase:  {order.time}</h4>
          </li>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({ orders: state.order.pastOrders });
const mapDispatch = (dispatch, ownProps) => ({
  fetchOrders() {
    console.log('dispatching fetch orders from front');
    dispatch(fetchOrders());
  },
});
export default connect(mapStateToProps, mapDispatch)(AllOrders);
