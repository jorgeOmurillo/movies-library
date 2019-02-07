import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ViewMoviePage = props => {
  const {
    _id,
    genre,
    name,
    image_url,
    year,
    description
  } = props.location.state;
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <div className="page-header__actions">
            <Link
              className="button"
              to={{ pathname: `/edit/${_id}`, state: props.location.state }}
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="movie_card" id="bright">
          <div className="info_section">
            <div className="movie_header">
              <img className="locandina" src={image_url} />
              <div className="movie_info">
                <h1>{name}</h1>
                <h4>{year}</h4>
                <p className="type">{genre}</p>
              </div>
            </div>
            <div className="movie_desc">
              <p className="text">{description}</p>
            </div>
          </div>
          <div className="blur_back bright_back" />
        </div>
      </div>
    </div>
  );
};

export default ViewMoviePage;
