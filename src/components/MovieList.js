import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import MovieListItem from './MovieListItem';
import selectMovies from '../selectors/selectMovies';

export const MovieList = props => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Movies</div>
      <div className="show-for-desktop">Movie</div>
      <div className="show-for-desktop">Genre</div>
    </div>
    <Grid>
      <Row>
        {props.movies.length === 0 ? (
          <div className="list-item list-item--message--row">
            <span>No movies</span>
          </div>
        ) : (
          props.movies.map(movie => {
            return <MovieListItem key={movie._id} {...movie} />;
          })
        )}
      </Row>
    </Grid>
  </div>
);

const mapStateToProps = state => {
  return {
    movies: selectMovies(state.movies, state.filters)
  };
};

export default connect(mapStateToProps)(MovieList);
