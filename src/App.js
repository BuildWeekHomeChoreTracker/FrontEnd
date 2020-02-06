import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import SignUpParent from './components/SignUpParent';
import SignUpChild from './components/SignUpChild';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import childLogin from './components/ChildLogin';
import AddChore from './components/AddChore';
import UpdateChore from './components/UpdateChore';
import ChildrenList from './components/ChildrenList';
import Child from './components/Child';
import ChoreList from './components/ChoreList';
import Chore from './components/Chore';
import './App.css';
import {PrivateRoute} from './utils/PrivateRoute';
import Home from './components/Home';

import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signUpParent' component={SignUpParent} />
        <Route exact path='/childLogin' component={childLogin} />

        <PrivateRoute exact path='/home' component={Home} />
        <PrivateRoute exact path='/signUpChild' component={SignUpChild} />
        <PrivateRoute exact path='/addChore' component={AddChore} />
        <PrivateRoute exact path='/updateChore' component={UpdateChore} />
        <PrivateRoute exact path='/childrenlist' component={ChildrenList} />
        <PrivateRoute exact path='/childrenlist/:id' component={Child} />
        <PrivateRoute exact path='/chorelist' component={ChoreList} />
        <PrivateRoute exact path='/chorelist/:id' component={Chore} />
      </Switch>
    </Router>
  );
};

export default App;
