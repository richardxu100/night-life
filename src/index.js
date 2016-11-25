// eslint-disable-next-line
import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

import './index.css';
import routes from './routes';

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.PROJECT_ID,
  databaseURL: process.env.DATABASE_NAME,
  storageBucket: `${process.env.PROJECT_ID}.appspot.com`,
}
firebase.initializeApp(config);

ReactDOM.render(
  routes,
  document.getElementById('root')
);
