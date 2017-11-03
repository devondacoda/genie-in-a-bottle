import { connect } from 'react-redux';
import React from 'react';
import { NavLink } from 'react-router-dom';

function getSingleProduct(props) {
  const productId = Number(props.match.params.productId);
  const singleProduct = props.products.filter(product => product.id === productId);
  return (
    <div>
      <h1>{singleProduct.length && singleProduct[0].name}</h1>
      <label>Stock
        <h3>{singleProduct.length && singleProduct[0].inventory}</h3>
      </label>
      <h3>category</h3>
    </div>);
}

const mapStateToProps = state => ({ products: state.products });

export default connect(mapStateToProps)(getSingleProduct);
