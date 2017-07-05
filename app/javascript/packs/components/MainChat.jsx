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
  p{
    color: white;
  }
`;

class MainChat extends Component {

  send = async (e) => {
    const response = await fetch('/chats?test=test', {
      method: "POST"
    })
    const json = await response.json();
    e.preventDefault();
    return false;
  }

  render() {
    return (
        <ChatContainer>
          <form onSubmit={this.send}>
            <input placeholder="Do you want to chat with the devil?"
                 type="text"
                 />
            <input type="submit" value="Send" />
          </form>
        </ChatContainer>
    );
  }

}

export default MainChat;
