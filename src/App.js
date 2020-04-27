import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Dashboard from './components/dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/detail">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
