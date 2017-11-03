import { connect } from 'react-redux';
import React, { Component } from 'react';

export default class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('Spanish Inquisition', this.props.quantity)
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
