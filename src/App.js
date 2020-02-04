import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/register' component={Register} />
          <Route path='/' component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
