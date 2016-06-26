import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Button from './modules/Button';

module.exports = (
  <Route path="/" component={App}>
    <Route path="" component={Button}/>
    <IndexRoute component={Button}/>
  </Route>
);
