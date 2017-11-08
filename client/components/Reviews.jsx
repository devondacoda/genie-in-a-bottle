import { connect } from 'react-redux';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchReviews } from '../store/reviews';

class Reviews extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMonunt() {
    this.props.fetchReviews(this.props.productId);
  }
  render() {
    const reviews = this.props.reviews;
    return (
      <div>
        {reviews.length && reviews.map(review => (<div>
          <h1>review.title</h1>
          <div>review.starts</div>
          <p>by Mario(to change eagerLoad)</p>
          <p>review.content</p>
      </div>
              ))}
      </div>
    );
  }
}


const mapStateToProps = state => ({ reviews: state.reviews });
const mapDispatchToProps = { fetchReviews };
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
