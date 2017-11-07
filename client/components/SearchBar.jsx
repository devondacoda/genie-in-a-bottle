import { connect } from 'react-redux';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchSearch } from '../store/filterList';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const tofilter = this.props.products.filter(filtered => filtered.name.match(e.target.search.value));
    this.props.fetchSearch(tofilter);
  }

  render() {
    return (
      <div className="form-group row mx-5">
        <form onSubmit={this.handleSubmit}>
          <input
            name="search"
            type="text"
            placeholder="Search for something"
            className=""
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ products: state.products });
const mapDispatchToProps = { fetchSearch };
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
