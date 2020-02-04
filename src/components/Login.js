import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { login } from "../action.js/login";

const Login = () => {
  const [state, setState] = useState({
    username: "",
    password: ""
  });

  const changeHandler = event => {
    setState({ ...state, [event.target.name]: event.target.value });
    // console.log(event.target.name, event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    login(state);
    console.log("I have been submitted!!");

    setState({
      username: "",
      password: ""
    });
  };

  return (
    <div>
      <h4>Login Page</h4>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={state.username}
          name="username"
          onChange={changeHandler}
          placeholder="username"
        />
        <input
          type="password"
          value={state.password}
          name="password"
          onChange={changeHandler}
          placeholder="password"
        />
        <button>Login</button>
        <Link to="/">
          <button>Home</button>
        </Link>
      </form>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {};
// };

export default Login;
