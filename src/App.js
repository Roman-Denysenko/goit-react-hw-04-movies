import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePageView';
import MoviesPage from './views/MoviesPageView';
import MovieDetailsPage from './views/MovieDetailsPageView';

import Header from './components/header';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
      </Switch>
    </>
  );
}

export default App;
