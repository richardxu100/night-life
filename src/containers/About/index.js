import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as firebase from 'firebase';

import styles from './styles';
import './style.css';

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        console.log(firebaseUser);
        this.setState({isLoggedIn: true});
      } else {
        console.log('Not logged in');
        this.setState({isLoggedIn: false});
      }
    })
  }

  login = () => {
    const email = this._email.input.value;
    const password = this._password.input.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
  }

  signUp = () => {
    const email = this._email.input.value;
    const password = this._password.input.value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
  }

  logout = () => {
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="About">
        <TextField
          ref={r => this._email = r}
          hintText="Email"
          style={styles.textField} />
        <TextField
          ref={r => this._password = r}
          hintText="Password"
          style={styles.textField}
          type="password" />
        {!this.state.isLoggedIn ?
          <RaisedButton
            label="Log in"
            style={styles.button}
            primary={true}
            onClick={this.login} /> :
          <RaisedButton
            label="Log out"
            style={styles.button}
            primary={true}
            onClick={this.logout} />
        }
        <RaisedButton
          label="Sign up"
          style={styles.button}
          secondary={true}
          onClick={this.signUp} />
      </div>
    )
  }
}
