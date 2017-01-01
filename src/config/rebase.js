import Rebase from 're-base';

const base = Rebase.createClass({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_NAME,
  storageBucket: process.env.STORAGE_BUCKET
});

export default base;
