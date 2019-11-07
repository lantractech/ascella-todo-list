import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory as createHistory } from 'history';
import rootReducer from './reducers';

export const history = createHistory();

const initialState = {};
const middleware = [
    routerMiddleware(history) // to dispatch history actions
    //saga middleware here if adding it
];


const store = createStore(
    rootReducer(history),
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
