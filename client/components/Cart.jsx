import { connect } from 'react-redux';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CartItem from './CartItem';

export default class Cart extends Component {
  constructor() {
    super()
    this.state = {
      cart: {
        isCart: true,
        status: 'Pending',
        products: [
          {
            name: 'test',
            description: 'test description....',
            price: '$1000',
          },
          // {
          //   name: 'test2',
          //   description: 'test description 2....',
          //   price: '$2000',
          // }
        ]
      }
    }
  }

  render() {
    return (
      <div>
        <div className="py-5">
        <h1 className="text-center">Your Cart</h1>
        </div>
        <CartItem products={this.state.cart.products} />
        <div className="py-5 mx-auto w-50">
          <a className="btn btn-primary w-100" href="">CHECKOUT</a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ order: state.order }) // need to create
// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleSubmit(A BUNCH OF PARAMS TO UPDATE ORDER) {
//       event.preventDefault()
//       dispatch(SUBMIT ORDER THUNK({PROBALY THE PARAMS AS THIS OBJ}))
//     }
//   }
// }

// PUT - edit quantity, delete item, flip cart to order, billing, shipping 