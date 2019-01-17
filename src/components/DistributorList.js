import React from 'react';
import { connect } from 'react-redux';
import DistributorListItem from './DistributorListItem';
import selectDistributors from '../selectors/selectDistributors';

export const DistributorList = props => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Distributors</div>
      <div className="show-for-desktop">Distributor</div>
      <div className="show-for-desktop">Region</div>
    </div>
    <div className="list-body">
      {props.distributors.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No distributors</span>
        </div>
      ) : (
        props.distributors.map(distributor => {
          return <DistributorListItem key={distributor._id} {...distributor} />;
        })
      )}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    distributors: selectDistributors(state.distributors, state.filters)
  };
};

export default connect(mapStateToProps)(DistributorList);
