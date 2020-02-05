import axios from 'axios';

import {LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR} from './index';

export const login = user => dispatch => {
  console.log('I am coming from action!!');
  dispatch({type: LOGIN_START});
  return axios
    .post('https://chore-tracker1.herokuapp.com/api/auth/login', user)
    .then(res => {
      console.log(res);
      dispatch({type: LOGIN_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({type: 'LOGIN_ERROR', payload: err});
    });
};
