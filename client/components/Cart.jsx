import { connect } from 'react-redux';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Cart extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div className="py-5">
        <h1 className="text-center">Your Cart</h1>
        </div>
        <div className="py-5">
          <div className="row">
            <div className="col-md-4 h-25">
              <img className="img-fluid d-block h-100 w-100" src="https://pingendo.com/assets/photos/wireframe/photo-1.jpg"/> </div>
            <div className="col-md-6 h-25">
              <p className="lead w-75">Product Name Goes Here</p>
              <p className="lead w-25 product-price">Price goes here</p>
              <p className="lead w-75">Product description goes here</p>
            </div>
            <div className="col-md-2">
              <div className="py-3">
                <a href="#" className="btn btn-outline-primary">Delete</a>
              </div>
              <div className="btn-group">
                <button className="btn btn-outline-primary dropdown-toggle" data-toggle="dropdown"> Quantity</button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
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