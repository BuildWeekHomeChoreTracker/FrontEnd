import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUpParent from "./components/SignUpParent";
import SignUpChild from "./components/SignUpChild";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import childLogin from "./components/ChildLogin";
import AddChore from "./components/AddChore";
import UpdateChore from "./components/UpdateChore";
import ChildrenList from "./components/ChildrenList";
import Child from "./components/Child";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/SignUpChild" component={SignUpChild} />
      <Route exact path="/SignUpParent" component={SignUpParent} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/childLogin" component={childLogin} />
      <Route exact path="/AddChore" component={AddChore} />
      <Route exact path="/UpdateChore" component={UpdateChore} />
      <Route exact path="/childrenlist" component={ChildrenList} />
      <Route exact path="/childrenlist/:childID" component={Child} />
    </Router>
  );
};

export default App;
