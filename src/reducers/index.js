import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import listReducer from './list';
import mainReducer from './main'

export default (history) => combineReducers({
  router: connectRouter(history),
  list: listReducer,
  main: mainReducer,
});