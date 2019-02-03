import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectMovies from '../selectors/selectMovies';

export const MoviesSummary = ({ MovieCount }) => {
  return (
    <div className="page-header">
      <div className="content-container">
        <div className="page-header__actions">
          <Link className="button" to="/add">
            Add Movie
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleMovies = selectMovies(state.movies, state.filters);

  return {
    movieCount: visibleMovies.length,
  };
};

export default connect(mapStateToProps)(MoviesSummary);
