import React, { Component } from 'react';
import styled from 'styled-components';

class NotificationBar extends Component {
  constructor (props) {
    super()
    this.state = {
      showDialog: this.ableToAsk() && Notification.permission !== 'granted'
    }
  }

  componentWillReceiveProps (props) {
    this.setState(props)
  }

  askPermission = () => {
    if (this.ableToAsk()) {
      Notification.requestPermission((permission) => {
        if (permission === "granted") {
          sendNotification("Welcome to the hell!");
        }
        this.setState({showDialog: false});
      });
    }
  }

  ableToAsk() {
    return ("Notification" in window) && Notification.permission !== 'denied';
  }

  render () {
    return (
      <div onClick={this.askPermission}>
        {(function () {
            if (this.state.showDialog) {
              return 'Do you want notifications?';
            }
          }).bind(this)()
        }
      </div>
    );
  }

}

export default NotificationBar;
