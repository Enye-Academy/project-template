import React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import history from '../utils/history';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route
        exact
        path="/"
        name="landing"
        component={(Home)}
      />
    </Switch>
  </Router>
);
export default App;
