import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { observer } from 'mobx-react';

import './style.css';
import logo from './logo.svg';

@observer
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

  deleteComment = (key) => {
    this.props.commentStore.deleteComment(key);
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
          <h2>Night-Life App</h2>
        </div>
        <p className="App-intro">
          {/* The number is {this.props.userStore.randNum} */}
        </p>
        <RaisedButton label={`The number is ${this.props.userStore.randNum}`}/>

        {/* <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleTextChange}
            value={this.state.text} />
          <input type="submit" style={{display: 'none'}}/>
        </form>

        <ul>
          {this.state.comments.map((comment) =>
            <li
              onClick={() => this.deleteComment(comment.key)}
              key={comment.key}>{comment.text}
            </li>
          )}
        </ul> */}
      </div>
    );
  }
}
