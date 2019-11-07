import { SET_MAIN, SET_MAIN_TODO_PAGE, SET_MAIN_ABOUT_PAGE } from './actionTypes'

export const setMainAction = (main) => {
    return {
        type: SET_MAIN,
        main
    };
}

export const setMainToDoPageAction = () => {
    return {
        type: SET_MAIN_TODO_PAGE
    };
}

export const setMainAboutPageAction = () => {
    return {
        type: SET_MAIN_ABOUT_PAGE
    };
}