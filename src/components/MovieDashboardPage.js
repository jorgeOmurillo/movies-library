import React from 'react';
import MoviesListFilters from '../components/MoviesListFilters';
import MoviesSummary from '../components/MoviesSummary';
import MovieList from '../components/MovieList';

const MovieDashboardPage = () => (
  <div>
    <MoviesSummary />
    <MoviesListFilters />
    <MovieList />
  </div>
);

export default MovieDashboardPage;
