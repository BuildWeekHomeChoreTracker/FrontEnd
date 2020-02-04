import {combineReducers} from 'redux';

import {loginReducer} from './loginReducer';
import {registerReducer} from './registerReducer';
import {childLoginReducer} from './childLoginReducer';

export default combineReducers({
  loginReducer,
  registerReducer,
  childLoginReducer
});
