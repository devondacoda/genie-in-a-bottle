import { connect } from 'react-redux';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CartItem from './CartItem';
import store, { getCurrentCart } from '../store';

class Cart extends Component {
  render() {
    return (
      <div>
        <div className="py-5">
          <h1 className="text-center">Your Cart</h1>
        </div>
        {
          this.props && this.props.cart.map(product => (
            <CartItem key={product.name} product={product} />
          ))
        }
        <div className="py-5 mx-auto w-50">
          <NavLink to="/checkout-success" className="btn btn-primary w-100">
            CHECKOUT
          </NavLink>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { cart } = state.order;
  return {cart}
};

const mapDispatchToProps = (dispatch) => {
  return {
//     handleSubmit(A BUNCH OF PARAMS TO UPDATE ORDER) {
//       event.preventDefault()
//       dispatch(SUBMIT ORDER THUNK({PROBALY THE PARAMS AS THIS OBJ}))
//     }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

// PUT - edit quantity, delete item, flip cart to order, billing, shipping
