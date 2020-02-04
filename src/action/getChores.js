import {FETCH_CHORES_START, FETCH_CHORES_SUCCESS, FETCH_CHORES_ERROR} from '.';

const getChores = id => dispatch => {
  dispatch({type: FETCH_CHORES_START});

  axiosWithAuth()
    .get(`/api/chore/${id}`)
    .then(res => {
      console.log(res.data);
      dispatch({type: FETCH_CHORES_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log(err);
      dispatch({type: FETCH_CHORES_ERROR, payload: err});
    });
};
