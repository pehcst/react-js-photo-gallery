import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import PhotoUpload from '../pages/PhotoUpload';

const Routes = () => (
  <Switch>
    {/* auth routes */}
    <Route path="/" exact component={Home} />
    <Route path="/upload" component={PhotoUpload} />
  </Switch>
);

export default Routes;
