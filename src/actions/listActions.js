import { SET_LIST } from './actionTypes'

export const setListAction = (list) => {
  return {
    type: SET_LIST,
    list
  };
}