import { connect } from 'react-redux';
import React from 'react';
import { NavLink } from 'react-router-dom';

function AllProducts(props) {
  return (
    <div className="text-center">
      <div className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center title">All Products</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3 product-list col-md-9">
        <ul className="row px-0">
          { props.products.length && props.products.map(product => (
            <li className="col-md-2 product my-2 all-products-picture" key={product.id}>
              <NavLink className="link" to={`/product/${product.id}`}>
                <img alt="img not available" className="product-pic my-2" src={product.picture}/>
                <h4 className="text-center">{product.name}</h4>
                <h4 className="text-center">Stock: {product.inventory}</h4>
              </NavLink>
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({ products: state.products });

export default connect(mapStateToProps)(AllProducts);
