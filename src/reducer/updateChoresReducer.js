import {UPDATE_CHORES_START, UPDATE_CHORES_SUCCESS, UPDATE_CHORES_ERROR} from '../action';

const initialState = {
  chores: {},
  updatingChores: false,
  error: ''
};

export const updateChoresReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case UPDATE_CHORES_START:
      return {
        ...state,
        updatingChores: true,
        error: null
      };
    case UPDATE_CHORES_SUCCESS:
      return {
        ...state,
        updatingChores: false,
        chores: payload
      };
    case UPDATE_CHORES_ERROR:
      return {
        ...state,
        error: payload
      };
  }
};
