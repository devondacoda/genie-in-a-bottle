import { connect } from 'react-redux';
import React from 'react';


function AllOrders(props) {
  const { orders } = props;
  console.log('YOOOOOOOOO',props)
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

const mapStateToProps = state => ({ orders: state.orders });

export default connect(mapStateToProps)(AllOrders);
