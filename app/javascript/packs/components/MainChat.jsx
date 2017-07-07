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
  constructor () {
    super();
    this.state = {
      sectId: 1,
      messages: []
    }
  }

  componentWillMount () {
    Application.cable.subscriptions.create({
      channel: "ChatChannel",
      room: `${this.state.sectId}_room`
    },
    {
      connected: () => { console.log('conected')},
      received: (item) => {
        this.state.messages.push(item)
        this.forceUpdate();
      }
    })
  }

  handleEvent = function (e) {
    this.send()
    e.preventDefault()
    return false;
  }

  send = async () => {
    var form = new FormData();
    form.append("message[content]", this.refs.content.value);
    const response = await fetch(`/api/v1/sects/${this.state.sectId}/chat`, {
      body: form,
      method: "POST"
    })
    const json = await (await response);
  }

  render() {
    return (
        <ChatContainer>
          <MessagesList messages={this.state.messages} />
          <form onSubmit={this.handleEvent.bind(this)}>
            <input ref="content"
                   placeholder="Do you want to chat with the devil?"
                   type="text"/>
            <input type="button" value="Send" onClick={this.handleEvent.bind(this)} />
          </form>
        </ChatContainer>
    );
  }

}

export default MainChat;
