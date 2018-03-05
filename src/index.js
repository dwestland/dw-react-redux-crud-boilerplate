import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import 'semantic-ui-css/semantic.min.css';

import reducer from './reducers/index';
import Users from './components/Users';
import './style.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk, logger)
  ));

render((
  <Provider store={store}>
    <Users /> 
  </Provider>
), document.getElementById('root'))
