import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FetchCast from '../../services/fetchCast.js';

class Cast extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  state = {
    actors: [],
  };

  async componentDidMount() {
    const { id } = this.props;

    try {
      const response = await FetchCast(id);
      this.setState({ actors: response.data.cast });
    } catch {
      // console.log(error);
    }
  }

  render() {
    const { actors } = this.state;
    return (
      <ul>
        {actors.map(actor => (
          <li key={actors.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
              alt="actors"
              width="100"
            ></img>
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Cast;
