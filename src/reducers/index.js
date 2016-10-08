import { combineReducers } from 'redux';

import user from './user';
import cabins from './cabins';


export default combineReducers({
  user,
  cabins
});