import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import NotFound from '../notFound/NotFound';
import LandingPage from '../landingPage/LandingPage';
import Dashboard from '../dashboard/Dashboard';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
