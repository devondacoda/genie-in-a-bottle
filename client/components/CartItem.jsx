import React from 'react';

export default function CartItem(props) {
  console.log('******props', props )
  props = props.products
  return (
    <div className="py-5">
    <div className="row">
      <div className="col-md-4 h-25">
        <img className="img-fluid d-block h-100 w-100" src="https://pingendo.com/assets/photos/wireframe/photo-1.jpg"/> </div>
      <div className="col-md-6 h-25">
        <p className="lead w-75 product-name">{props[0].name}</p>
        <p className="lead w-25 product-price">{props[0].price}</p>
        <p className="lead w-75 product-desc">{props[0].description}</p>
      </div>
      <div className="col-md-2">
        <div className="py-3">
          <a href="#" className="btn btn-outline-primary">Delete</a>
        </div>
        <div className="btn-group">
          <button className="btn btn-outline-primary dropdown-toggle" data-toggle="dropdown"> Quantity</button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Separated link</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}