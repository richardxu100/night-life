import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { inject, observer } from 'mobx-react';

@inject('commentStore', 'userStore') @observer
export default class MainLayout extends Component {

  componentWillMount = () => injectTapEventPlugin();

  toLogin = () => browserHistory.push('/login');

  render() {
    return (
      <div>
        <AppBar
          title="Night-Life"
          showMenuIconButton={false}
          iconElementRight={<FlatButton onClick={this.toLogin}>Login</FlatButton>} />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}
