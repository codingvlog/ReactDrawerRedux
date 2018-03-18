import { combineReducers } from 'redux';
import auth from './authReducer';
import nav from './navReducer';

const AppReducer = combineReducers({
  nav,
  auth,
});

export default AppReducer;
