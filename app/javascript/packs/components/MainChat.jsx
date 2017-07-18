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
    flex: 0 0 55px;
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
  constructor (props) {
    super(props);
    this.state = {
      conversationId: props.currentConversationId || -1,
      messages: [],
      subscription: null,
      isMyUser: true
    }
  }

  componentWillMount () {
    this.createSubscription();
    this.loadMessages();
  }

  loadMessages = async () => {
    const response = await fetch(`/api/v1/sects/${this.state.conversationId}/messages`, {
      method: "GET",
      credentials: "same-origin"
    })
    const json = await (await response).json();
    json.forEach((item) => {
      const i = {
        id: item.id,
        body: item.content,
        sent_by: item.username,
        user_id: item.user_id
      }
      this.handleMessage(i, false)
    })
  }

  createSubscription = () => {
    this.state.subscription = Application.cable.subscriptions.create({
      channel: "ChatChannel",
      room: `${this.state.conversationId}_room`
    },
    {
      received: this.handleMessage
    })
  }

  handleMessage = (item, hackable = true) => {
    // this.state.messages.push(item)
    // this.forceUpdate();
    // ☸☸☸☸☸☸☸☸☸☸☸☸☸ DOGE ATENTION ☸☸☸☸☸☸☸☸☸☸☸☸☸
    // if you comment 2 lines above and use the line below it appears to work the same way (?)
    // 🍉🍉🍉🍉🍉🍉🍉🍉 WATERMELON ATTENTION 🍉🍉🍉🍉🍉🍉
    // You were right, take this cookie 🍪
    if(item.user_id !== this.props.currentUser.id) {
      sendNotification(item.body);
      this.setState({isMyUser: false});

    }
    else{
      this.setState({isMyUser: true});
    }
    item['hackable'] = hackable;
    this.setState({messages:[...this.state.messages, item]});
  }

  componentDidUpdate (prevProps, prevState) {
    if(prevState.conversationId !== this.state.conversationId) {
      this.setState({messages: []})
      Application.cable.subscriptions.remove(this.state.subscription)
      this.createSubscription()
      this.loadMessages();
    }
  }

  handleEvent = function (e) {
    e.preventDefault();
    this.send();
    this.refs.content.value = '';
    return false;
  }

  send = async () => {
    sendMessage(this.refs.content.value)
  }

  componentWillReceiveProps(props) {
    this.setState({
      conversationId: props.currentConversationId || -1
    })
  }

  render() {
    return (
        <ChatContainer>
          <MessagesList currentUser={this.state.isMyUser} messages={this.state.messages} />
          <form autoComplete="off" onSubmit={this.handleEvent.bind(this)}>
            <input ref="content"
                   autoFocus
                   placeholder="Write a message"
                   type="text"/>
            <input type="submit" value="Send" onClick={this.handleEvent.bind(this)} />
          </form>
        </ChatContainer>
    );
  }

}

export default MainChat;
