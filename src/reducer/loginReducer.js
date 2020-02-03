import {LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR} from '../action.js';

const initialState = {
  users: [],
  isLogging: false,
  error: ''
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        isLogging: true,
        error: null
      };

    case LOGIN_SUCCESS:
      return {
        isLoggin: false,
        error: null,
        users: action.payload
      };

    case LOGIN_ERROR:
      return {
        error: action.payload
      };

    default:
      return state;
  }
};
