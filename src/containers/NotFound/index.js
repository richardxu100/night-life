import React, { Component } from 'react';

import './style.css';

export default class NotFound extends Component {
  // componentWillUnmount = () => authUi.reset();

  render() {
    return (
      <div className="NotFound">
        <h1>
          404 <small>Not Found :(</small>
        </h1>
      </div>
    );
  }
}
