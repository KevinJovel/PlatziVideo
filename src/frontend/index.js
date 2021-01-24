import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import reducer from './reducers';
import initalState from './initalState';
import APP from './routes/App';

const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initalState, composeEnhancers());
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <APP />
    </Router>
  </Provider>
  , document.getElementById('app'),
);
