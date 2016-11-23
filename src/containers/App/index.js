import React, { Component } from 'react';
import firebase from 'firebase';

import logo from './logo.svg';
import './style.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = { text: '' }
  }

  handleTextChange = (e) => this.setState({text: e.target.value});

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.commentStore.addComment(this.state.text);
    this.setState({text: ''});
  }

  render() {
    console.log(firebase.database());
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Ahh phew noo yoo, noo</h2>
        </div>
        <p className="App-intro">
          To asdfasf started, edit <code>src/App.js</code> and save to reload.
        </p>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleTextChange}
            value={this.state.text} />
          <input type="submit" style={{display: 'none'}}/>
        </form>

        <ul>
          {this.props.commentStore.comments.map((comment, i) =>
            <li key={i}>{comment.text}</li>
          )}
        </ul>
      </div>
    );
  }
}
