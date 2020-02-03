import axios from 'axios';

import {LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR} from './index';

export const login = user => dispatch => {
  dispatch({type: LOGIN_START});
  axios
    .post('https://reqres.in/api/login', user)
    .then(res => {
      console.log(res);
      dispatch({type: LOGIN_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({type: 'LOGIN_ERROR', payload: err});
    });
};
