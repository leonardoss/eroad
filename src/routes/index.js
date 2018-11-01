import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../containers/Dashboard';
import NotFound from '../containers/NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Dashboard } />
    <Route component={ NotFound } />
  </Switch>
);

export default Routes;
