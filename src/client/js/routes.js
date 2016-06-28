import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import ButtonContainer from './modules/ButtonContainer';

module.exports = (
  <Route path="/" component={App}>
    <Route path="" component={ButtonContainer}/>
    <IndexRoute component={ButtonContainer}/>
  </Route>
);
