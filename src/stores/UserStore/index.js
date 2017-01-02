import { observable, action } from 'mobx';

import base from '../../config/rebase';

class UserStore {
  @observable users = [];

  @action loginWithProvider = (providerName) => {
    console.log(`logged in with ${providerName}!`);
    const authHandler = (err, user) => {
      if (err) {
        return console.log('error with login: ', err);
      }
      console.log('the user is ', user);
    }
    base.authWithOAuthPopup(providerName, authHandler);
  }
}

const userStore = window.userStore = new UserStore();

module.exports = { userStore }
