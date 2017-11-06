import { connect } from 'react-redux';
import React, { Component } from 'react';
import { addProduct } from '../store';

class AddToCart extends Component {
  constructor(props) {
    super(props);
  }
  
  
  render() {
    return (
      <div>
        {
          this.props.stock ? <button onClick={this.props.addProduct}>Add To Cart</button> : <button disabled="true">Out of Stock</button>
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addProduct() {
    const { itemId, quantity } = ownProps;
    dispatch(addProduct(itemId, quantity))
  },
});

export default connect(null, mapDispatchToProps)(AddToCart);
