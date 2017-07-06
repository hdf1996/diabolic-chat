import React, { Component } from 'react';
import styled from 'styled-components';
import MessagesList from './MessagesList';

const ChatContainer = styled.section`
  height: 100%;
  min-height: 100vh;
  align-items: flex-start;
  flex: 1 1 50%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background: ${props => props.theme.color2};
  p{
    color: white;
  }
  form{
    flex: 0 0 150px;
  }
`;

class MainChat extends Component {

  send = async (e) => {
    e.preventDefault();
    const response = await fetch('/chats?test=test', {
      method: "POST"
    })
    const json = await (await response);
    // console.log(json);
    return false;
  }

  render() {
    return (
        <ChatContainer>
          <MessagesList />
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
