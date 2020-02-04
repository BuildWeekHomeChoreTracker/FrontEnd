import {UPDATE_CHORES_START, UPDATE_CHORES_SUCCESS, UPDATE_CHORES_ERROR} from '.';

export const updateChores = item => dispatch => {
  dispatch({type: UPDATE_CHORES_START});
  return axiosWithAuth()
    .put(`/api/chore/${id}`, item)
    .then(res => {
      console.log(res.data);
      dispatch({type: UPDATE_CHORES_SUCCESS, payload: item});
    })
    .catch(err => {
      console.log(err);
      dispatch({type: UPDATE_CHORES_ERROR, type: err});
    });
};
