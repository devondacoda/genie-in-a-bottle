import { connect } from 'react-redux';
import React from 'react';
import { NavLink } from 'react-router-dom';

function getSingleProduct(props) {
  const productId = Number(props.match.params.productId);
  const singleProduct = props.products.filter(product => product.id === productId);
  return (
    <div>
      <h1>{singleProduct.length && singleProduct[0].name}</h1>
      <img src={singleProduct.length && singleProduct[0].picture} alt="mario messed up"/>
        <h3>Stock: {singleProduct.length && singleProduct[0].inventory}</h3>
      <h3>category</h3>
    </div>);
}

const mapStateToProps = state => ({ products: state.products });

export default connect(mapStateToProps)(getSingleProduct);
