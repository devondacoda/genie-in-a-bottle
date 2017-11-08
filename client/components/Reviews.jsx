import { connect } from 'react-redux';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchReviews } from '../store/reviews';
import { AddReview } from './';

class Reviews extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchReviews(this.props.productId);
  }
  render() {
    const { reviews } = this.props;
    return (
      <div>
        {reviews.length && reviews.map(review => (
          <div>
            <h1>{review.title}</h1>
            <div>{review.stars} Stars</div>
            <p>By: {review.user.name}</p>
            <p>{review.content}</p>
          </div>
              ))}
        <AddReview />
      </div>
    );
  }
}


const mapStateToProps = state => ({ reviews: state.reviews });
const mapDispatchToProps = { fetchReviews };
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
