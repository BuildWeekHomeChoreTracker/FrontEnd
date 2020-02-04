import axios from 'axios';
import {CHILD_LOGIN_START, CHILD_LOGIN_SUCCESS} from '.';

export const childLogin = user => dispatch => {
  dispatch({type: CHILD_LOGIN_START});
  axios
    .post('//https://chore-tracker1.herokuapp.com/api/auth/login/child')
    .then(res => {
      console.log(res);
      dispatch({type: CHILD_LOGIN_SUCCESS, payload: res.data});
    })
    .catch();
};
