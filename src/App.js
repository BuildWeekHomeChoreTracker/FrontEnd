import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import SignUpParent from './components/SignUpParent';
import SignUpChild from './components/SignUpChild';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import childLogin from './components/ChildLogin';
import {PrivateRoute} from './utils/PrivateRoute';

import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/SignUpParent' component={SignUpParent} />
        <Route exact path='/childLogin' component={childLogin} />
        <Route exact path='/Login' component={Login} />

        <PrivateRoute exact path='/SignUpChild' component={SignUpChild} />
      </Switch>
    </Router>
  );
};

export default App;
