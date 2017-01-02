import { observable, action } from 'mobx';

import base from '../../config/rebase';

class UserStore {
  @observable users = [];

  @action loginWithProvider = (providerName, callback) => {
    console.log(`logged in with ${providerName}!`);
    const authHandler = (err, user) => {
      if (err) {
        console.log('error with login: ', err);
        return callback(err.message);
      }
      console.log('the user is ', user);
      return callback('success');
    }
    base.authWithOAuthPopup(providerName, authHandler);
  }
}

const userStore = window.userStore = new UserStore();

module.exports = { userStore }
