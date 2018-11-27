import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import NotFound from '../notFound/NotFound';
import LandingPage from '../landingPage/LandingPage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact component={NotFound} />
  </Switch>
);

export default Routes;
