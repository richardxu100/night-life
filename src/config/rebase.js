import Rebase from 're-base';

const base = Rebase.createClass({
  apiKey: process.env.API_KEY,
  authDomain: process.env.PROJECT_ID,
  databaseURL: process.env.DATABASE_NAME,
  storageBucket: process.env.STORAGE_BUCKET
});

export default base;
