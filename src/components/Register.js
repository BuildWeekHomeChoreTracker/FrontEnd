import React, {useState} from 'react';
// import {connect} from 'react-redux';

// import {login} from '../action.js/login';

// firstname	Required
// lastname	Required
// email	Required and Unique
// username	Required and Unique
// password	Required

const Register = () => {
  const [state, setState] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: ''
  });

  const changeHandler = event => {
    setState({...state, [event.target.name]: event.target.value});
    // console.log(event.target.name, event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    console.log('I have been submitted!!');

    setState({
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: ''
    });
  };

  return (
    <div>
      <h4>Login Page</h4>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          value={state.firstname}
          name='firstname'
          onChange={changeHandler}
          placeholder='first name'
        />
        <input
          type='text'
          value={state.lastname}
          name='lastname'
          onChange={changeHandler}
          placeholder='lastname'
        />
        <input
          type='text'
          value={state.email}
          name='email'
          onChange={changeHandler}
          placeholder='email'
        />
        <input
          type='text'
          value={state.username}
          name='username'
          onChange={changeHandler}
          placeholder='username'
        />
        <input
          type='password'
          value={state.password}
          name='password'
          onChange={changeHandler}
          placeholder='password'
        />
        <button>Register</button>
      </form>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {};
// };

export default Register;
