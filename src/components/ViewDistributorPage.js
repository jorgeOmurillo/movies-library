import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ViewDistributorPage = props => {
  const {
    _id,
    name,
    sales,
    logistics,
    op,
    region,
    country
  } = props.location.state;
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Current Distributor</h1>
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
        <h3>Sales:</h3>
        <p className="text-display">{sales}</p>
        <h3>Name:</h3>
        <p className="text-display">{name}</p>
        <h3>Country:</h3>
        <p className="text-display">{country}</p>
        <h3>Region:</h3>
        <p className="text-display">{region}</p>
        <h3>Sales:</h3>
        <p className="text-display">{sales}</p>
      </div>
    </div>
  );
};

export default ViewDistributorPage;
