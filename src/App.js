import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SignUpParent from "./components/SignUpParent";
import SignUpChild from "./components/SignUpChild";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import childLogin from "./components/ChildLogin";
import AddChore from "./components/AddChore";
import UpdateChore from "./components/UpdateChore";
import ChildrenList from "./components/ChildrenList";
import Child from "./components/Child";
import ChoreList from "./components/ChoreList";
import Chore from "./components/Chore";
import "./App.css";
import { PrivateRoute } from "./utils/PrivateRoute";
import Home from "./components/Home";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/SignUpChild" component={SignUpChild} />
        <Route exact path="/SignUpParent" component={SignUpParent} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/childLogin" component={childLogin} />
        <Route exact path="/AddChore" component={AddChore} />
        <Route exact path="/UpdateChore" component={UpdateChore} />
        <Route exact path="/childrenlist" component={ChildrenList} />
        <Route exact path="/childrenlist/:childID" component={Child} />
        <Route exact path="/chorelist" component={ChoreList} />
        <Route exact path="/chorelist/:choreID" component={Chore} />

        <Route exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/home" component={Home} />
        <Route exact path="/SignUpParent" component={SignUpParent} />
        <Route exact path="/childLogin" component={childLogin} />
        <Route exact path="/login" component={Login} />

        <PrivateRoute exact path="/SignUpChild" component={SignUpChild} />
      </Switch>
    </Router>
  );
};

export default App;
