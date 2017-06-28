import React, { Component } from 'react';
import styled from 'styled-components';
// import logo from './logo.svg';

const ChatContainer = styled.section`
  height: 100%;
  min-height: 100vh;
  align-items: flex-start;
  flex: 1 1 50%;
  display: flex;
  flex-wrap: wrap;
  background: ${props => props.theme.color2};
`;

class MainChat extends Component {

  send = (e) => {
    fetch('/chats?test=test', { method: "POST"})
    e.preventDefault();
    return false;
  }

  render() {
    return (
        <ChatContainer>
          <input placeholder="Do you want to chat with the devil?"
                 type="text"
                 />
          <a href="#" onClick={this.send}>Send it!</a>
        </ChatContainer>
    );
  }

}

export default MainChat;