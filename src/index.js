// eslint-disable-next-line
import React from 'react';
import ReactDOM from 'react-dom';
import firebaseui from 'firebaseui';

import './styles/style.sass';
import routes from './routes';
import base from './config/rebase';

const authUi = new firebaseui.auth.AuthUI(base.auth());

var uiConfig = {
  'signInSuccessUrl': './',
  'signInOptions': [
    // Leave the lines as is for the providers you want to offer your users.
    base.auth.EmailAuthProvider.PROVIDER_ID,
    base.auth.GoogleAuthProvider.PROVIDER_ID,
    base.auth.TwitterAuthProvider.PROVIDER_ID
  ],
  signInFlow: 'popup',
  // Terms of service url.
  'tosUrl': './terms.html',
};

// The start method will wait until the DOM is loaded.
authUi.start('#firebaseui-auth-container', uiConfig);

ReactDOM.render(
  routes,
  document.getElementById('root')
);
