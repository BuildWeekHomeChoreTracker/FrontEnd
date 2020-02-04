import React, {useState} from 'react';
import axios from 'axios';

// firstname	Required
// lastname	Required
// email	Required and Unique
// username	Required and Unique
// password	Required

const Register = props => {
  const [state, setState] = useState({
    fname: '',
    lname: '',
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
    console.log('I have been submitted f');

    axios
      .post('https://chore-tracker1.herokuapp.com/api/auth/register', state)
      .then(res => {
        console.log('This is the data ', res);
      })
      .catch(err => {
        console.log(err);
      });

    setState({
      fname: '',
      lname: '',
      email: '',
      username: '',
      password: ''
    });
  };

  return (
    <div>
      <h4>Signup Page</h4>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          value={state.fname}
          name='fname'
          onChange={changeHandler}
          placeholder='first name'
        />
        <input
          type='text'
          value={state.lname}
          name='lname'
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
