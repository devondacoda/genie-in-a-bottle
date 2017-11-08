import { connect } from 'react-redux';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AddToCart from './AddToCart';
import { Reviews } from './index';

class getSingleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      quantity: e.target.value,
    });
  }

  render() {
    const productId = Number(this.props.match.params.productId);
    const singleProduct = this.props.products.filter(product => product.id === productId);
    return (
      <div>
        <div className="text-center single-product">
          <h1>{singleProduct.length && singleProduct[0].name}</h1>
          <img src={singleProduct.length && singleProduct[0].picture} alt="mario messed up" />
          <p>{singleProduct.length && singleProduct[0].description}</p>
          <h3>Stock: {singleProduct.length && singleProduct[0].inventory}</h3>
          <h3>Price: ${singleProduct.length && singleProduct[0].price}</h3>
          <form>
            <select onChange={this.handleChange}>
              <option>Quantity</option>
              {[...Array(singleProduct.length && singleProduct[0].inventory)].map((option, i) => (
                <option key={i}>{ i + 1 }</option>
            ))}
            </select>
          </form>
          <AddToCart itemId={productId} quantity={this.state.quantity} stock={singleProduct.length && singleProduct[0].inventory} />
        </div>
        {/* <Reviews productId={productId} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({ products: state.products });

export default connect(mapStateToProps)(getSingleProduct);
