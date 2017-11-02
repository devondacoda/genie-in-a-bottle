import { connect } from 'react-redux';
import React from 'react';
import { NavLink } from 'react-router-dom';

function AllProducts(props) {
  return (
    <div>
      <div className="my-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center">All Products</h1>
            </div>
          </div>
        </div>
      </div>
      <ul>
        { props.products.length && props.products.map(product => {
                return(
                <li key={product.id}>
                    <NavLink to={`/product/${product.id}`}>
                        <img alt="oops!" src={product.picture} height="200" width="300"/>
                    </NavLink>
                </li>
                ) 
            }
        )}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({ products: state.products });

export default connect(mapStateToProps)(AllProducts);
