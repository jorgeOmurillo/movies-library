import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import MovieListItem from './MovieListItem';
import selectMovies from '../selectors/selectMovies';
import * as scrollHelpers from '../modules/common/scroll.helpers';

export class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1
    };
  }

  componentDidMount() {
    window.onscroll = this.handleScroll;
    this.props.getTopMovies(this.state.currentPage);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { movies } = this.props;
    if (!movies.isLoading) {
      let percentageScrolled = scrollHelpers.getPercentageScrolledDown(window);
      if (percentageScrolled > 0.8) {
        const nextPage = this.state.currentPage + 1;
        this.props.getTopMovies(nextPage);
        this.setState({ currentPage: nextPage });
      }
    }
  }

  render() {
    return (
      <div className="content-container">
        <div className="list-header">
          <div className="show-for-mobile">Movies</div>
          <div className="show-for-desktop">Movie</div>
          <div className="show-for-desktop">Genre</div>
        </div>
        <Grid>
          <Row>
            <Row>
              {props.movies.length === 0 ? (
                <div className="list-item list-item--message">
                  <span>No movies</span>
                </div>
              ) : (
                props.movies.map(movie => {
                  return <MovieListItem key={movie._id} {...movie} />;
                })
              )}
            </Row>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: selectMovies(state.movies, state.filters)
  };
};

export default connect(mapStateToProps)(MovieList);
