import React from 'react';
import { Router, Link, NavLink, Route, Switch } from 'react-router-dom';
import AddDistributorPage from '../components/AddDistributorPage';
import createHistory from 'history/createBrowserHistory';
import DistributorDashboardPage from '../components/DistributorDashboardPage';
import EditDistributorPage from '../components/EditDistributorPage';
import DistributorForm from '../components/DistributorForm';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import ViewDistributorPage from '../components/ViewDistributorPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DistributorDashboardPage} exact={true} />
        <Route path="/add" component={AddDistributorPage} />
        <Route path="/view/:id" component={ViewDistributorPage} />
        <Route path="/edit/:id" component={EditDistributorPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
