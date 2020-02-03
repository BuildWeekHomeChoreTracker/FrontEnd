import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Register />
      </div>
    </Router>
  );
};

export default App;
