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
  flex-wrap: wrap;
  background: ${props => props.theme.color2};
  p{
    color: white;
  }
  form{
    flex: 0 0 70px;
    align-self: flex-end;
    width: 100%;
    display: flex;
    max-width: 650px;
    margin: 0 auto;
    margin-bottom: 30px;
    input{
      flex: 1;
      border-radius: 0;
      border: none;
      padding: 10px 20px;
    }
    input[type="submit"]{
      flex: 0;
      border: none;
    }
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
        // this.state.messages.push(item)
        // this.forceUpdate();
        // ☸☸☸☸☸☸☸☸☸☸☸☸☸ DOGE ATENTION ☸☸☸☸☸☸☸☸☸☸☸☸☸
        // if you comment 2 lines above and use the line below it appears to work the same way (?)
        this.setState({messages:[...this.state.messages, item]});
      }
    })
  }

  handleEvent = function (e) {
    e.preventDefault();
    this.send()
    document.getElementById('submit').value= '';
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
          <form autoComplete="off" onSubmit={this.handleEvent.bind(this)}>
            <input id="submit" ref="content"
                   placeholder="Do you want to chat with the devil?"
                   type="text"/>
            <input type="submit" value="Send" onClick={this.handleEvent.bind(this)} />
          </form>
        </ChatContainer>
    );
  }

}

export default MainChat;
