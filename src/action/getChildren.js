import {GET_CHILDREN_START, GET_CHILDREN_ERROR, GET_CHILDREN_SUCCESS} from '.';
import axiosWithAuth from '../utils/axiosWithAuth';

const getChildren = () => dispatch => {
  dispatch({type: GET_CHILDREN_START});

  return axiosWithAuth()
    .get('/api/auth/child')
    .then(res => {
      console.log(res);
      dispatch({type: GET_CHILDREN_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log(err);
      dispatch({type: GET_CHILDREN_ERROR, payload: err});
    });
};

export default getChildren;
