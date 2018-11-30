import { combineReducers } from 'redux';
import userReducer from './userReducer';
import entryReducer from './entryReducer';

const rootReducer = combineReducers({
  user: userReducer,
  entry: entryReducer,
});

export default rootReducer;
