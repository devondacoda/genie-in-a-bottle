import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchOrders } from '../store';


class AllOrders extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { userId } = this.props;
    this.props.fetchOrders(userId)
  }

  render() {
    const { orders } = this.props;
    console.log('YOOOOOOOOO', this.props);
    return (
      <div>
        <h3>Loaderino?</h3>
        {/* {orders.map(order =>
        (
          <li key={order.id}>
            <h3>{order.status}</h3>
            <h4>{order.total}</h4>
            <h4>{order.time}</h4>
          </li>
        ))} */}
      </div>
    );
  }
}

const mapStateToProps = state => ({ orders: state.orders });
const mapDispatch = { fetchOrders };
export default connect(mapStateToProps, mapDispatch)(AllOrders);
