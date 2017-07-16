import React, { Component } from 'react';
import styled from 'styled-components';

const NotificationContainer = styled.div`
  position: fixed;
  bottom: 120px;
  z-index: 999;
  left: calc(50% - 175px + 125px);
  width: 100%;
  max-width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  color: white;
`;

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

  byeNotification = () =>{
    this.setState({showDialog: false})
  }

  ableToAsk() {
    return ("Notification" in window) && Notification.permission !== 'denied';
  }

  render () {
    return (
      <NotificationContainer>
        <div>
          {(function () {
              if (this.state.showDialog) {
                return (
                  <article>

                    <h2>Do you want notifications?</h2>
                    <button onClick={this.askPermission}>
                      Yes
                    </button>
                    <button onClick={this.byeNotification}>
                      No
                    </button>

                  </article>

                );
              }
            }).bind(this)()
          }
        </div>
      </NotificationContainer>
    );
  }

}

export default NotificationBar;
