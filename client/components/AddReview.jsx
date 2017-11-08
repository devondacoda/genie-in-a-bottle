import React, { Component } from 'react';
import { createReview } from '../store/reviews';
import { connect } from 'react-redux';

class AddReview extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      stars: '',
      content: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
    this.props.createReview(this.state, this.props.productId);
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <div>
            <input type="text" name="title" />
          </div>
        </label>
        <label>
          Stars
          <div>
            <input type="text" name="stars" />
          </div>
        </label>
        <label>
          Content:
          <div>
            <textarea type="text" name="content" />
          </div>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

// const mapState = null;

const mapDispatch = { createReview };

export default connect(null, mapDispatch)(AddReview);
