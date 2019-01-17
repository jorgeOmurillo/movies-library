import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setTextFilter, filterByRegion } from '../actions/filters';

const apiURL = '';

export class DistributorsListFilters extends React.Component {
  state = {};

  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };

  onFilterChange = e => {
    this.props.filterByRegion(e.target.value);
  };

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              placeholder="Search distributors"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.filterBy}
              onChange={this.onFilterChange}
            >
              <option value="all">All Regions...</option>
              <option value="aten-be">ATEN-BE</option>
              <option value="aten-cn">ATEN-CN</option>
              <option value="aten-jp">ATEN-JP</option>
              <option value="aten-kr">ATEN-KR</option>
              <option value="aten-nj">ATEN-NJ</option>
              <option value="aten-tech">ATEN-TECH</option>
              <option value="aten-tw">ATEN-TW</option>
              <option value="aten-uk">ATEN-UK</option>
              <option value="eastern-europe">Eastern Europe</option>
              <option value="latin-america">Latin America</option>
              <option value="middle-east-and-north-africa">
                Middle East and North Africa
              </option>
              <option value="new-zealand">New Zealand</option>
              <option value="poland">Poland</option>
              <option value="russia">Russia</option>
              <option value="south-africa">South Africa</option>
              <option value="south-asia">South Asia</option>
              <option value="southeast-asia">Southeast Asia</option>
              <option value="turkey">Turkey</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  filterByRegion: filterBy => dispatch(filterByRegion(filterBy))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DistributorsListFilters);
