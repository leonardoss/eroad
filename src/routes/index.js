import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../containers/Dashboard';
import NotFound from '../containers/NotFound';
import About from '../containers/About';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Dashboard } />
    <Route exact path="/about" component={ About } />
    <Route component={ NotFound } />
  </Switch>
);

export default Routes;
