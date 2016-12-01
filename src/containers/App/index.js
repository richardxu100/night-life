import React, { Component } from 'react';
import * as firebase from 'firebase';

// import logo from './logo.svg';
import './style.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      data: 10,
      children: []
    }
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('react');
    // const speedRef = rootRef.child('speed');
    rootRef.on('value', (snap) => {
      this.setState({data: snap.val()})
    });

    rootRef.on('child_added', (snap) => { // on changes to the speed reference
      console.log('child_added: ', snap.val());
      this.setState({
        children: [...this.state.children, snap.val()]
      })
    })
  }

  updateHobbies = () => {
    // a post entry
    const hobbyData = ['running', 'punching'];

    // get a new key for a new update
    // const newHobbyKey = firebase.database().ref().child('hobbies').push().key;

    // update in two places
    const updates = {};
    updates['/hobbies'] = hobbyData;
    updates['/users/0/hobbies'] = hobbyData;

    return firebase.database().ref().update(updates);
  }

  handleTextChange = (e) => this.setState({text: e.target.value});

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.commentStore.addComment(this.state.text);
    this.setState({text: ''});
  }

  changeSpeed = () => {
    const rootRef = firebase.database().ref().child('react/others');
    rootRef.set({pandas: 118});
  }

  render() {
    // console.log(firebase.database());
    return (
      <div>
        <pre>{JSON.stringify(this.state.data, null, 3)}</pre>
        <ul>
          {this.state.children.map((child, i) =>
            <li key={i}>{child}</li>
          )}
        </ul>
        <div className="App">
          <button onClick={this.updateHobbies}>Update Hobbies</button>

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
      </div>
    );
  }
}
