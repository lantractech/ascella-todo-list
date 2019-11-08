import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';

import store, { history } from './store';
import Main from './containers/Main';
import './resources/index.css'

const rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/todo" render={(props) => <Main {...props} />} />
                <Route path="/about" render={(props) => <Main {...props} />} />
                <Route render={(props) => <Main {...props} page='404' pageTitle='404 Page' />} />
            </Switch>
        </ConnectedRouter>
    </Provider>
    , rootElement
);

