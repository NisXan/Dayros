import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import App from './containers/App.js';
import reducers from './reducers/reducers.js';
import { setAccessTokenUnplash, authenticationUrl, setBearerToken } from './unsplash/unsplash.js'; 
import { createBrowserHistory } from 'history';

import '../public/favicon.ico';

const initialState = [];

const store = createStore(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const history = createBrowserHistory();
const code = location.search.split('code=')[1];

if (code) {  
  setAccessTokenUnplash(code);
  history.push('/');
}

if (localStorage.getItem('token') === 'undefined' || localStorage.getItem('token') === ''|| !localStorage.getItem('token')) {
  location.assign(authenticationUrl);
} else {
  setBearerToken(localStorage.getItem('token'));
  ReactDOM.render(
    <Provider store = { store }>
      <Router history= { history }>
        <App />
      </Router>
    </Provider>,
    document.getElementById('gallery')
  )
}