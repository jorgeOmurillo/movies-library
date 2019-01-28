import React from 'react';
import { connect } from 'react-redux';
import MovieForm from './MovieForm';
import { startEditMovie, startRemoveMovie } from '../actions/movies';

export class EditMoviePage extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = movie => {
    this.props.startEditMovie(this.props.match.params.id, movie);
    this.props.history.push({
      pathname: `/view/${this.props.match.params.id}`,
      state: {
        detail: this.props.match.params.id,
        ...movie
      }
    });
  };

  onRemove = () => {
    this.props.startRemoveMovie({ id: this.props.match.params.id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Movie</h1>
          </div>
        </div>
        <div className="content-container">
          <MovieForm movie={this.props.movie} onSubmit={this.onSubmit} />
          <button className="button button--secondary" onClick={this.onRemove}>
            Remove Movie
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  movie: state.movies.find(movie => movie._id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditMovie: (id, movie) => dispatch(startEditMovie(id, movie)),
  startRemoveMovie: data => dispatch(startRemoveMovie(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditMoviePage);
