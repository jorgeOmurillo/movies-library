import React from 'react';
import { Link } from 'react-router-dom';

const DistributorListItem = ({
  _id,
  region,
  name,
  sales,
  op,
  logistics,
  country
}) => (
  <Link
    className="list-item"
    to={{
      pathname: `/view/${_id}`,
      state: { _id: _id, region: region, name: name, sales: sales, op: op, logistics: logistics, country: country }
    }}
  >
    <div>
      <h3 className="list-item__title">{name}</h3>
      <span className="list-item__sub-title">
        Country: {country}, Sales: {sales}, OP: {op}, Logistics: {logistics}
      </span>
    </div>
    <h3 className="list-item__data">{region}</h3>
  </Link>
);

export default DistributorListItem;
