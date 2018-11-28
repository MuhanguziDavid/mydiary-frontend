import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import NotFound from '../notFound/NotFound';
import LandingPage from '../landingPage/LandingPage';

const LandingPageContainer = () => (
  <div className="landing-page-container">
    <Route exact path="/" component={LandingPage} />
  </div>
);

const Routes = () => (
  <Switch>
    <Route component={LandingPageContainer} />
    <Route exact component={NotFound} />
  </Switch>
);

export default Routes;
