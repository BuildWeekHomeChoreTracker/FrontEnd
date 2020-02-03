import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SignUpParent from "./components/SignUpParent";
import Dashboard from "./components/Dashboard";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Dashboard />
    </Router>
  );
};

export default App;
