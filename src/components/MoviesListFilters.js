import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setTextFilter, filterByGenre } from '../actions/filters';

export class MoviesListFilters extends React.Component {
  state = {};

  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };

  onFilterChange = e => {
    this.props.filterByGenre(e.target.value);
  };

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              placeholder="Search movies"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.filterBy}
              onChange={this.onFilterChange}
            >
              <option value="all">All Genres...</option>
              <option value="action">Action</option>
              <option value="animation">Animation</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="drama">Drama</option>
              <option value="fantasy">Fantasy</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="science_fiction">Science Fiction</option>
              <option value="thriller">Thriller</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  filterByGenre: filterBy => dispatch(filterByGenre(filterBy))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesListFilters);
