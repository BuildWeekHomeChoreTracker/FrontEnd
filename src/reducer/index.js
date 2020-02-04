import {combineReducers} from 'redux';

import {loginReducer} from './loginReducer';
import {registerReducer} from './registerReducer';
import {childLoginReducer} from './childLoginReducer';
import {addChildReducer} from './addChildReducer';

export default combineReducers({
  loginReducer,
  registerReducer,
  childLoginReducer,
  addChildReducer
});
