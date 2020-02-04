import {DELETE_CHILD_START, DELETE_CHILD_SUCCESS, DELETE_CHILD_ERROR} from '.';
import axiosWithAuth from '../utils/axiosWithAuth';

const deleteChild = id => dispatch => {
  dispatch({type: DELETE_CHILD_START});
  axiosWithAuth()
    .delete('')
    .then(res => {
      console.log(res);
      dispatch({type: DELETE_CHILD_SUCCESS, payload: id});
    })
    .catch(err => {
      console.log(err);
      dispatch({type: DELETE_CHILD_ERROR, payload: err});
    });
};
