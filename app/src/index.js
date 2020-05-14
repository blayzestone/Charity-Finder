import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from './store/reducers';

import App from './App';

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);