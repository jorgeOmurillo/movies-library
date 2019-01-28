import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ViewMoviePage = props => {
  const {
    _id,
    genre,
    name,
    image_url
  } = props.location.state;
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Current Movie</h1>
        <div className="container_button__edit">
          <Link
            className="button__edit"
            to={{ pathname: `/edit/${_id}`, state: props.location.state }}
          >
            Edit
          </Link>
        </div>
        </div>
      </div>
      <div className="content-container">
        <h3>Name:</h3>
        <p className="text-display">{name}</p>
        <h3>Genre:</h3>
        <p className="text-display">{genre}</p>
      </div>
    </div>
  );
};

export default ViewMoviePage;
