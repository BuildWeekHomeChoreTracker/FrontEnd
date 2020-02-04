import axiosWithAuth from '../utils/axiosWithAuth';
import {ADD_CHILD_START, ADD_CHILD_ERROR} from '.';

export const addChild = child => dispatch => {
  dispatch({type: ADD_CHILD_START});
  axiosWithAuth()
    .post('')
    .then(res => {
      console.log(res);
      dispatch({type: ADD_CHILD_START, payload: child});
    })
    .catch(err => {
      console.log(err);
      dispatch({type: ADD_CHILD_ERROR, paylod: err});
    });
};
