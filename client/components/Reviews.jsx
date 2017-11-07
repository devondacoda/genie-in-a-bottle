import { connect } from 'react-redux';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Reviews extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMonunt() {

  }
  render() {
    return (
        <div>Mario</div>
     
    );
  }
}


const mapStateToProps = state => ({ products: state.products });
const mapDispatchToProps = { fetchSearch };
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);