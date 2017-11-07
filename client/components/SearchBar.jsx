import { connect } from 'react-redux';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      search: '',  // redux this make new componebt for search componebt
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.search.value,'~~~!@#@$@42$')
    this.state = this.setState({
      search: e.target.search.value,
    });
  }
  render() {
    return (
      <div className="form-group row mx-5">
        <form onSubmit={this.handleSubmit}>
          <input name="search" type="text" placeholder="Search for something" className="" />
          <button type="submit">Search</button>
        </form>
      </div>);
  }
}

const mapStateToProps = state => ({ products: state.products });

export default connect(mapStateToProps)(SearchBar);
