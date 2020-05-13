import { combineReducers } from 'redux';
import { charityReducer as charity } from './charityReducer';

export default combineReducers({
  charity,
});