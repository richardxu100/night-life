import React, { Component } from 'react';
import * as firebase from 'firebase';

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      todos: []
    }
  }

  componentDidMount() {
    const todoRef = firebase.database().ref();

    todoRef.child('todos').on('value', (snap) => {
      console.log('todos are', snap.val());
      this.setState({todos: snap.val()});
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const todoKey = firebase.database().ref().child('todos').push().key;
    const todoData = {
      name: this.state.text,
      submitter: 'Rich',
      id: todoKey
    };
    const updates = {};
    updates['/todos/' + todoKey] = todoData;
    this.setState({text: ''});
    return firebase.database().ref().update(updates);
  }

  handleTextChange = (e) => this.setState({text: e.target.value});

  render() {
    console.log('state of todos', this.state.todos);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleTextChange} />
          <input type="submit" style={{display: 'none'}} />
        </form>

        <ul>
          {!this.state.todos === [] ?
            this.state.todos.map((todo, i) => <li key={i}>{todo}</li>) :
            ''
          }
        </ul>
      </div>
    );
  }
}
