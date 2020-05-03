import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import thunkMiddleware from 'redux-thunk';

import { loadingBarMiddleware, showLoading, hideLoading } from 'react-redux-loading-bar'


import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { alertActions } from './actions/alert'
import * as actions from './actions'
import rootReducer from './reducers'
import * as serviceWorker from './serviceWorker';
import App from './App';

const client = axios.create({
  baseURL: 'https://api.classikapp.com/',
  responseType: 'json'
});

function errorHandler({ getState, dispatch, error }) {
  // debugger;
  console.log(error.response)
  if (error.response.status === 401) {
    // auto logout if 401 response returned from api
    dispatch(actions.logout());
    window.location.reload(true);
  }
  dispatch(alertActions.error(error.response.data.error));
  dispatch(hideLoading());
}

const middlewareConfig = {
  onError: errorHandler,
  interceptors: {
    request: [
      function ({ getState, dispatch, getSourceAction }, req) {
        console.log(req); // contains information about request object
        if (localStorage.getItem('user') != null) {
          req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).jwt}`
        }
        dispatch(showLoading());
        return req;
      }
    ],
    response: [
      function ({ getState, dispatch, getSourceAction }, res) {
        console.log(res); // contains information about request object
        dispatch(hideLoading());
        return res;
      }
    ]
  }
};

const store = createStore(
  rootReducer, // custom reducers
  applyMiddleware(
    thunkMiddleware,
    axiosMiddleware(client, middlewareConfig), // second parameter options can optionally contain onSuccess, onError, onComplete, successSuffix, errorSuffix
    loadingBarMiddleware({
      promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE'],
    })
  )
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
