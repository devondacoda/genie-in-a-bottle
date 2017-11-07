import { connect } from 'react-redux';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchSearch } from '../store/filterList';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '', // redux this make new componebt for search componebt
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.state = this.setState({
    //   search: e.target.search.value
    // });
    const tofilter = this.props.products.filter(filtered => filtered.name.match(e.target.search.value));
    this.props.fetchSearch(tofilter);
    // e.target.search.value;
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
// dispatch
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
