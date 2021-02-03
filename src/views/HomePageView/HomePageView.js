import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fetchMoviesPage from '../../services/fetchMoviesPage.js';

class HomePageView extends Component {
  state = {
    movies: [],
    error: null,
  };

  async componentDidMount() {
    try {
      const response = await fetchMoviesPage();
      this.setState({ movies: response.data.results });
    } catch {
      //    this.setState({error})
    }
  }

  render() {
    const { movies } = this.state;

    return (
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default HomePageView;
