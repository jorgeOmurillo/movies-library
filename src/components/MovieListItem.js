import React from 'react';
import { Link } from 'react-router-dom';

const MovieListItem = ({ _id, genre, name }) => (
  <Link
    className="list-item"
    to={{
      pathname: `/view/${_id}`,
      state: { _id: _id, genre: genre, name: name }
    }}
  >
    <div>
      <h3 className="list-item__title">{name}</h3>
      <span className="list-item__sub-title">Genre: {genre} </span>
    </div>
  </Link>
);

export default MovieListItem;
