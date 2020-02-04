import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import ChildLogin from './components/ChildLogin';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/childlogin' component={ChildLogin} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
