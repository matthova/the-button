import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Clock from './modules/Clock';

module.exports = (
  <Route path="/" component={App}>
    <Route path="" component={Clock}/>
    <IndexRoute component={Clock}/>
  </Route>
);
