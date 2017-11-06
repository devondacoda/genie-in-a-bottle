import { connect } from 'react-redux';
import React, { Component } from 'react';
import { addProduct } from '../store';

export default class AddToCart extends Component {
  constructor(props) {
    super(props);
  }
  
  
  render() {
    console.log('props', this.props)
    return (
      <div>
        {
          this.props.stock ? <button onClick={this.handleClick}>Add To Cart</button> : <button disabled="true">Out of Stock</button>
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addProduct() {
    const { itemId, quantity } = ownProps;
    dispatch(addProduct())
  },
});

connect(null, mapDispatchToProps)(AddToCart);
