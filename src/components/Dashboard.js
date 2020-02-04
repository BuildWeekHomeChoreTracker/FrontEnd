import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const FormPage = () => {
  return (
    <div>
      <h2>Register</h2>
      <Link to="SignUpChild">
        <button>I'm a child</button>
      </Link>
      <Link to="/SignUpParent">
        <button>I'm a parent</button>
      </Link>
      <Link to="/Login">
        <p>I already have an account</p>
      </Link>
    </div>
  );
};

export default FormPage;
