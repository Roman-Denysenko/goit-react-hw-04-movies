import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FetchReviews from '../../services/fetchReviews.js';

class Reviews extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { id } = this.props;

    try {
      const response = await FetchReviews(id);
      this.setState({ reviews: response.data.results });
    } catch {
      // console.log(error);
    }
  }

  render() {
    const { reviews } = this.state;

    if (reviews.length > 0) {
      return (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>{`Author:${review.author}`}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      );
    }

    if (reviews.length === 0) {
      return <p>There are no reviews for this film yet</p>;
    }
  }
}

export default Reviews;
