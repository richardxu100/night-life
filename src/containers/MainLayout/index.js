import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import { inject, observer } from 'mobx-react';

@inject('commentStore', 'userStore') @observer
export default class MainLayout extends Component {

  componentWillMount = () => injectTapEventPlugin();

  render() {
    return (
      <div>
        <AppBar
          title="Nooo"
          iconClassNameRight="muidocs-icon-navigation-expand-more" />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}
