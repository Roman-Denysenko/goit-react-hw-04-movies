import React, { Component } from 'react';
import FetchMoviesDetailPage from '../../services/fetchMovieDetailsPage.js';
import Cast from '../../components/cast';
import Reviews from '../../components/reviews';
import { Link, Route, Switch } from 'react-router-dom';

class MovieDetailsPage extends Component {
  state = {
    title: null,
    name: null,
    poster_path: null,
    overview: null,
    genres: null,
    movieId: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    if (movieId) {
      try {
        const response = await FetchMoviesDetailPage(movieId);
        const { title, name, poster_path, overview, genres } = response.data;
        this.setState({ title, name, poster_path, overview, genres, movieId });
      } catch {
        //    this.setState({error})
      }
    }
  }

  render() {
    const { title, name, poster_path, overview, genres, movieId } = this.state;
    return (
      <>
        <section>
          <h1>{title || name}</h1>
          {poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${poster_path}`}
              alt="poster"
            ></img>
          )}
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres && (
            <ul>
              {genres.map(item => (
                <li key={genres.indexOf(item)}>{item.name}</li>
              ))}
            </ul>
          )}
        </section>

        <section>
          <h2>Additional information</h2>
          <ul>
            <li>
              <Link to={`/movies/${movieId}/cast`}>Cast</Link>
            </li>
            <li>
              {' '}
              <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
            </li>
          </ul>
        </section>

        <section>
          <Switch>
            <Route
              path={`/movies/${movieId}/cast`}
              render={props => {
                return movieId && <Cast id={movieId} />;
              }}
            />
            <Route
              path={`/movies/${movieId}/reviews`}
              render={props => {
                return movieId && <Reviews id={movieId} />;
              }}
            />
          </Switch>
        </section>
      </>
    );
  }
}

export default MovieDetailsPage;
