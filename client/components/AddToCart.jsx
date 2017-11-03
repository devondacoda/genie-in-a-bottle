import { connect } from 'react-redux';
import React, { Component } from 'react';

export default class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    
  }

  render() {
    return (
      <div>
        {
          this.props.stock ? <button onClick={this.handleClick}>Add To Carto</button> : <button disabled="true">Out of Stock</button>
        }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addProduct() {

  },
});

connect(null, mapDispatchToProps)(AddToCart);
