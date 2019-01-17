import React from 'react';
import { Router, Link, NavLink, Route, Switch } from 'react-router-dom';
import AddMoviePage from '../components/AddMoviePage';
import createHistory from 'history/createBrowserHistory';
import MovieDashboardPage from '../components/MovieDashboardPage';
import EditMoviePage from '../components/EditMoviePage';
import MovieForm from '../components/MovieForm.js';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import ViewMoviePage from '../components/ViewMoviePage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={MovieDashboardPage} exact={true} />
        <Route path="/add" component={AddMoviePage} />
        <Route path="/view/:id" component={ViewMoviePage} />
        <Route path="/edit/:id" component={EditMoviePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
