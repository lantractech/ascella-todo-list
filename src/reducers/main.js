import { SET_MAIN,SET_MAIN_TODO_PAGE,SET_MAIN_ABOUT_PAGE } from '../actions/actionTypes'
const initialState = { page: 'todo', pageTitle: 'TO-DO LIST' };

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAIN:
      return {
        ...state,
        ...action.main
      };
    case SET_MAIN_TODO_PAGE:
      return {
        ...state,
        page:'todo',
        pageTitle:'TO-DO LIST',
        tabValue: 0
      };
    case SET_MAIN_ABOUT_PAGE:
      return {
        ...state,
        page:'about',
        pageTitle:'ABOUT',
        tabValue: 1
      };
    default:
      return state;
  }
}

export default mainReducer