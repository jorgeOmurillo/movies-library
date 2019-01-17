import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectDistributors from '../selectors/selectDistributors';

export const DistributorsSummary = ({ distributorCount }) => {
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Current Distributors</h1>
        <div className="page-header__actions">
          <Link className="button" to="/add">
            Add Distributor
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleDistributors = selectDistributors(state.distributors, state.filters);

  return {
    distributorCount: visibleDistributors.length,
  };
};

export default connect(mapStateToProps)(DistributorsSummary);
