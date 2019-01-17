import React from 'react';
import { connect } from 'react-redux';
import MovieListItem from './MovieListItem';
import selectMovies from '../selectors/selectMovies';

export const MovieList = props => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Movies</div>
      <div className="show-for-desktop">Movie</div>
      <div className="show-for-desktop">Genre</div>
    </div>
    <div className="list-body">
      {props.movies.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No movies</span>
        </div>
      ) : (
        props.movies.map(movie => {
          return <MovieListItem key={movie._id} {...movie} />;
        })
      )}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    movies: selectMovies(state.movies, state.filters)
  };
};

export default connect(mapStateToProps)(MovieList);
