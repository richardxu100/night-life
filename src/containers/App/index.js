import React, { Component } from 'react';
import * as firebase from 'firebase';

// import logo from './logo.svg';
import './style.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      speed: 10
    }
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('react');
    const speedRef = rootRef.child('others').child('pandas');
    speedRef.on('value', (snap) => { // on changes to the speed reference
      this.setState({
        speed: snap.val()
      });
    });
  }

  handleTextChange = (e) => this.setState({text: e.target.value});

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.commentStore.addComment(this.state.text);
    this.setState({text: ''});
  }

  changeSpeed = () => {
    const rootRef = firebase.database().ref().child('react/others');
    rootRef.set({pandas: 18});
  }

  render() {
    console.log(firebase.database());
    return (
      <div className="App">
        <h1>{this.state.speed}</h1>

        <button onClick={this.changeSpeed}>Change Speed</button>

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
