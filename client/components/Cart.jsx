import { connect } from 'react-redux';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CartItem from './CartItem';
import { getCurrentCart, completeCheckout } from '../store';
import store from '../store';

class Cart extends Component {
  render() {
    const products = this.props.cart.products 
    ? this.props.cart.products
    : []

    return (
      <div>
        <div className="py-5">
          <h1 className="text-center">Your Cart</h1>
        </div>
        {
          products.length
          ? products.map(product => (
            <CartItem key={product.name} product={product} />
          ))
          : <h2>Empty Cart</h2>
        }
        <div className="py-5 mx-auto w-50">
        {
          products.length
          ? 
          <NavLink to="/checkout-success" className="btn btn-primary w-100" onClick={this.props.submitCheckout}>
            CHECKOUT
          </NavLink>
          :
          <button className="btn btn-primary w-100" disabled="true">
            Cart Empty
          </button>

        }
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
    submitCheckout() {
      dispatch(completeCheckout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

// PUT - edit quantity, delete item, flip cart to order, billing, shipping
