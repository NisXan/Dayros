import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { routerReducer, routerMiddleware } from "react-router-redux";
import App from './containers/App.js';
import reducers from './reducers/reducers.js';
import { setAccessTokenUnplash } from './unsplash/unsplash.js';
import { createBrowserHistory } from 'history';

import '../public/favicon.ico';

const initialState = [];

const history = createBrowserHistory();
const middleware = routerMiddleware(history);

export const store = createStore(
  reducers,
  initialState,
  applyMiddleware(middleware)
)

const code = location.search.split('code=')[1];

if (code) {  
  setAccessTokenUnplash(code);
  history.push('/photo');
}

ReactDOM.render(
  <Provider store = { store }>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('gallery')
)