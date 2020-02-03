import axios from 'axios';

import {REGISTER_START, REGISTER_SUCCESS, REGISTER_ERROR} from './index';

export const register = user => dispatch => {
  dispatch({type: REGISTER_START});
  axios
    .post('https://reqres.in/api/register', user)
    .then(res => {
      dispatch({type: REGISTER_SUCCESS, payload: res});
    })
    .catch(err => {
      dispatch({type: REGISTER_ERROR, payload: err});
    });
};
