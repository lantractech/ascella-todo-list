import { SET_LIST } from '../actions/actionTypes'
const initialState = {items:[]};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        ...action.list
      };
    default:
      return state;
  }
}

export default listReducer