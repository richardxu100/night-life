import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
// import TextField from 'material-ui/TextField';
import FontAwesome from 'react-fontawesome';

import LightenDarkenColor from '../../utils/colors';

@inject('commentStore', 'userStore') @observer
export default class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true }
  }

  componentWillMount = () => injectTapEventPlugin();

  toLogin = () => this.setState({open: true});
  handleClose = () => this.setState({open: false});

  loginWithProvider = (providerName) => {
    this.props.userStore.loginWithProvider(providerName);
  }

  renderSocialButton = (socialMediaName, color) =>
    <FlatButton
      label={`Log in with ${socialMediaName}`}
      style={{marginTop: 5, marginBottom: 5, width: '100%', textAlign: 'left'}}
      labelStyle={{color: 'white'}}
      backgroundColor={color}
      hoverColor={LightenDarkenColor(color, -30)}
      rippleColor={color}
      icon={<FontAwesome style={{color: 'white', width: 20}} name={socialMediaName} />}
      onClick={() => this.loginWithProvider(socialMediaName)} />

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        style={{width: '100%'}}
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];
    return (
      <div>
        <AppBar
          title="Night-Life"
          showMenuIconButton={false}
          iconElementRight={<FlatButton onClick={this.toLogin}>Login</FlatButton>} />
        <Dialog
          title="Social Providers"
          actions={actions}
          modal={false}
          open={this.state.open}
          contentStyle={{maxWidth: 300}}
          titleStyle={{textAlign: 'center'}}
          onRequestClose={this.handleClose}>
          {this.renderSocialButton('google', '#EF5350')}
          {this.renderSocialButton('twitter', '#1DA1F2')}
          {this.renderSocialButton('github', '#424242')}
          {this.renderSocialButton('facebook', '#3B5998')}
          {/* <TextField hintText="Email" />
          <TextField hintText="Password" type="password" /> */}
          {/* <Link>Need an account?</Link> */}
        </Dialog>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}
