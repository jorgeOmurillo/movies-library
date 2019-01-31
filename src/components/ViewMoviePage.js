import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ViewMoviePage = props => {
  const { _id, genre, name, image_url, year } = props.location.state;
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
        <div className="movie_card">
          <div className="info_section">
            <div className="movie_header">
              <img className="locandina" src={image_url} />
              <h1>{name}</h1>
              <h4>{year}, David Ayer</h4>
              <span className="minutes">117 min</span>
              <p className="type">{genre}</p>
            </div>
            <div className="movie_desc">
              <p className="text">
                Set in a world where fantasy creatures live side by side with
                humans. A human cop is forced to work with an Orc to find a
                weapon everyone is prepared to kill for.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMoviePage;
