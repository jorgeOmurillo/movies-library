import axios from 'axios';

// ADD_MOVIE
export const addMovie = movie => ({
  type: 'ADD_MOVIE',
  movie
});

export const startAddMovie = (movieData = {}) => {
  return (dispatch) => {
    const {
      genre = '',
      name = '',
    } = movieData;
    const movie = { genre, name };

    return axios.post('/api/movies', movie).then(movie => {
      dispatch(
        addMovie({
          id: movie.data._id,
          ...movie.data
        })
      );
    });
  };
};

// REMOVE_MOVIE
export const removeMovie = ({ id } = {}) => ({
  type: 'REMOVE_MOVIE',
  id
});

export const startRemoveMovie = ({ id } = {}) => {
  return dispatch => {
    return axios
      .delete(`/api/movie/delete/${id}`)
      .then(() => {
        dispatch(removeMovie({ id }));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

// EDIT_MOVIE
export const editMovie = (id, updates) => ({
  type: 'EDIT_MOVIE',
  id,
  updates
});

export const startEditMovie = (id, updates) => {
  return dispatch => {
    return axios
      .put(`/api/movies/edit/${id}`, updates)
      .then(() => {
        dispatch(editMovie(id, updates));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

// SET_MOVIES
export const setMovies = movies => ({
  type: 'SET_MOVIES',
  movies
});

export const startSetMovies = () => {
  return dispatch => {
    return axios
      .get('/api/movies')
      .then(response => {
        dispatch(setMovies(response.data));
      })
      .catch(e => {
        console.log('err:', e);
      });
  };
};
