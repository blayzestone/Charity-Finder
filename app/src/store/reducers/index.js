import { combineReducers } from 'redux';
import { charityReducer as charity } from './charityReducer';
import { usersReducer as users } from './usersReducer';

export default combineReducers({
  charity,
  users,
});