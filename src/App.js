import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUpParent from "./components/SignUpParent";
import SignUpChild from "./components/SignUpChild";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/SignUpChild" component={SignUpChild} />
      <Route exact path="/SignUpParent" component={SignUpParent} />
      <Route exact path="/Login" component={Login} />
    </Router>
  );
};

export default App;
