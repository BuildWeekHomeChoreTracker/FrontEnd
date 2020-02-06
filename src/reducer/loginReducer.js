import {LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR} from '../action/index.js';

const initialState = {
  userID: '',
  isLogging: false,
  error: '',
  token: localStorage.getItem('token')
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLogging: true,
        error: null
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggin: false,
        error: null,
        userID: action.payload.id,
        token: state.token
      };

    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
