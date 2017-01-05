import { observable, action } from 'mobx';

import base from '../../config/rebase';

class UserStore {
  @observable users = [];
  @observable currentUser;
  @observable randNum = 12;

  @action loginWithProvider = (providerName, callback) => {
    console.log(`logged in with ${providerName}!`);
    const authHandler = (err, user) => {
      if (err) {
        console.log('error with login: ', err);
        return callback(err.message);
      }
      console.log('the user is ', user);
      this.setCurrentUser(user);
      return callback('success');
    }
    base.authWithOAuthPopup(providerName, authHandler);
  }

  @action setCurrentUser = (user) => this.currentUser = user;

  @action logout = () => {
    console.log('Logging out from UserStore');
    base.unauth();
    this.currentUser = undefined;
  }
}

const userStore = window.userStore = new UserStore();

module.exports = { userStore }
