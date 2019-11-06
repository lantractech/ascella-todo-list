import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';

import store, { history } from './store';
import Home from './containers/Home';

const rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={Home} />
            </div>
        </ConnectedRouter>
    </Provider>
    , rootElement
);

