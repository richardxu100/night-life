import React, { Component } from 'react';

import './style.css';
import logo from './logo.svg';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      comments: []
    }
  }

  handleTextChange = (e) => this.setState({text: e.target.value});

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.commentStore.addComment(this.state.text);
    this.setState({text: ''});
  }

  componentDidMount() {
    this.props.commentStore.getComments((comments) => { // async code, yooo!
      this.setState({comments})
    })
  }

  render() {
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
          {this.state.comments && this.state.comments.map((comment, i) =>
            <li key={i}>{comment.text}</li>
          )}
        </ul>
      </div>
    );
  }
}
