import React from 'react';
import DistributorsListFilters from '../components/DistributorsListFilters';
import DistributorsSummary from '../components/DistributorsSummary';
import DistributorList from '../components/DistributorList';

const DistributorDashboardPage = () => (
  <div>
    <DistributorsSummary />
    <DistributorsListFilters />
    <DistributorList />
  </div>
);

export default DistributorDashboardPage;
