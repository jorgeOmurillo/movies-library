import React from 'react';
import { connect } from 'react-redux';
import DistributorForm from './DistributorForm';
import {
  startEditDistributor,
  startRemoveDistributor
} from '../actions/distributors';

export class EditDistributorPage extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = distributor => {
    this.props.startEditDistributor(this.props.match.params.id, distributor);
    this.props.history.push({
      pathname: `/view/${this.props.match.params.id}`,
      state: {
        detail: this.props.match.params.id,
        ...distributor
      }
    });
  };

  onRemove = () => {
    this.props.startRemoveDistributor({ id: this.props.match.params.id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Distributor</h1>
          </div>
        </div>
        <div className="content-container">
          <DistributorForm
            distributor={this.props.distributor}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>
            Remove Distributor
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  distributor: state.distributors.find(
    distributor => distributor._id === props.match.params.id
  )
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditDistributor: (id, distributor) =>
    dispatch(startEditDistributor(id, distributor)),
  startRemoveDistributor: data => dispatch(startRemoveDistributor(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditDistributorPage);
