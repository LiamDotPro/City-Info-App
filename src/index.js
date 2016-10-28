import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import loadGoogleMapsAPI from 'load-google-maps-api';
// import gmapAPIKEY from './dev_api_key.js';

import App from './components/app';
import reducers from './reducers';

import './style/vendor/bootstrap.css';
import './style/style.css';
import './style/title.css';

const devAPIKey = ""; // get a variable from a file here...
const options = { "key" : process.env.gmapAPI || 'devAPIkeyhere' };
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
loadGoogleMapsAPI().then((googleMaps) => {
  console.log('success'); //= > Object { Animation: Object, ...
}).catch((err) => {
  console.error(err);
});

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('body'));
