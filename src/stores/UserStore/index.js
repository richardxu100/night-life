import { observable, action } from 'mobx';

import base from '../../config/rebase';

class UserStore {
  @observable users = [];

  @action loginWithGoogle = () => {
    console.log('logged in with google!');
    const authHandler = (err, user) => {
      if (err) {
        return console.log('error with login: ', err);
      }
      console.log('the user is ', user);
    }
    base.authWithOAuthPopup('google', authHandler);   
  }
}

const userStore = window.userStore = new UserStore();

module.exports = {
  userStore
}
