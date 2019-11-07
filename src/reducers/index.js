import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import userReducer from './user';
import mainReducer from './main'

export default (history) => combineReducers({
  router: connectRouter(history),
  user: userReducer,
  main: mainReducer,
});