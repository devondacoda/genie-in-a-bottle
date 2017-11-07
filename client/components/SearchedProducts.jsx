import { connect } from 'react-redux';
import React from 'react';
import { NavLink } from 'react-router-dom';

function SearchedProducts(props) {
  return (
    <div>
      <div className="my-4 ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center">All Products</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3 product-list col-md-10">
        <ul className="row">
          { props.filterProducts.length && props.filterProducts.map(product => (
            <li className="col-md-3 product" key={product.id}>
              <NavLink to={`/product/${product.id}`}>
                <img alt="img not available" className="product-pic" src={product.picture} />
                <h4>{product.name}</h4>
              </NavLink>
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({ filterProducts: state.filterProducts });

export default connect(mapStateToProps)(SearchedProducts);
