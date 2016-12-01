import * as firebase from 'firebase';
import { observable, action } from 'mobx';

class UserStore {
  @observable users = [];

  @action loginWithGoogle = () => {
    console.log('You tried to login with Google!');
    var provider = new firebase.auth.GoogleAuthProvider();
    // provider.addScope('https://www.googleapis.com/auth/plus.login');
    // provider.setCustomParameters({
    //   'login_hint': 'user@example.com'
    // });
    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.log('The error is', error);
    });
  }
}

const userStore = window.userStore = new UserStore();
const testUserStore = new UserStore();

module.exports = {
  userStore,
  testUserStore
}
