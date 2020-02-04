import React, { useState } from "react";
import { Link } from "react-router-dom";
// import axios from 'axios';

export default function Register() {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: ""
  });

  const changeHandler = event => {
    setState({ ...state, [event.target.name]: event.target.value });
    // console.log(event.target.name, event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    console.log("I have been submitted!!");

    setState({
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: ""
    });
  };

  return (
    <div>
      <h4>Register Page For Your Child</h4>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={state.firstname}
          name="firstname"
          onChange={changeHandler}
          placeholder="first name"
        />
        <input
          type="text"
          value={state.lastname}
          name="lastname"
          onChange={changeHandler}
          placeholder="lastname"
        />
        <input
          type="text"
          value={state.email}
          name="email"
          onChange={changeHandler}
          placeholder="email"
        />
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
        <button className="w-100 btn btn-primary mt-3" type="submit">
          Submit
        </button>
        <Link to="/">
          <button>Home</button>
        </Link>
        {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
      </form>
    </div>
  );
}
