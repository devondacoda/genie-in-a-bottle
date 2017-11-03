import { connect } from 'react-redux';
import React from 'react';
import { NavLink } from 'react-router-dom';

function getSingleProduct(props) {
  const productId = Number(props.match.params.productId);
  const singleProduct = props.products.filter(product => product.id === productId);
  return (
    <div>
      <h1>{singleProduct.length && singleProduct[0].name}</h1>
      <img src={singleProduct.length && singleProduct[0].picture} alt="mario messed up" />
      <p>{singleProduct.length && singleProduct[0].description}</p>
      <h3>Stock: {singleProduct.length && singleProduct[0].inventory}</h3>
      <h3>category</h3>
      <h3>Price: ${singleProduct.length && singleProduct[0].price}.69</h3>
      <form>
        <select>
          <option>Quantity</option>
          {[...Array(singleProduct.length && singleProduct[0].inventory)].map((option, i) => (
            <option key={i}>{ i + 1 }</option>
          ))}
        </select>
      </form>
      <button>Add To Cart</button>
    </div>);
}

const mapStateToProps = state => ({ products: state.products });

export default connect(mapStateToProps)(getSingleProduct);
