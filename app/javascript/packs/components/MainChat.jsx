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
    max-width: 680px;
    margin: 0 auto;
    margin-bottom: 30px;
    margin-top: 30px;
    position: relative;
    input{
      flex: 1 1 100%;
      border-radius: 0;
      border: none;
      padding: 10px 20px;
      border-radius: 25px;
    }
    button{
      width: 50px;
      background: ${props => props.theme.btnPrimary};
      border: none;
      border-radius: 50%;
      position: absolute;
      right: 5px;
      height: 50px;
      border: 1px solid ${props => props.theme.btnPrimary};
      top: 3px;
      cursor: pointer;

      svg{
        transform: scale(0.8);
        transition: 0.3s ease;
      }
      &:hover{
        svg{
          transform: scale(.9);
        }
      }
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
      itemId: 0
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
      this.handleMessage(i, false, false)
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

  handleMessage = (item, hackable = true, notification = true) => {
    // this.state.messages.push(item)
    // this.forceUpdate();
    // ☸☸☸☸☸☸☸☸☸☸☸☸☸ DOGE ATENTION ☸☸☸☸☸☸☸☸☸☸☸☸☸
    // if you comment 2 lines above and use the line below it appears to work the same way (?)
    // 🍉🍉🍉🍉🍉🍉🍉🍉 WATERMELON ATTENTION 🍉🍉🍉🍉🍉🍉
    // You were right, take this cookie 🍪
    if(notification && item.user_id !== this.props.currentUser.id) {
      sendNotification(item.body);
    }
    this.setState({itemId: item.user_id})

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
    sendMessage(this.refs.content.value, this.state.conversationId)
  }

  componentWillReceiveProps(props) {
    this.setState({
      conversationId: props.currentConversationId || -1
    })
  }

  render() {
    return (
        <ChatContainer>
          <MessagesList currentUser={this.props.currentUser.id} messages={this.state.messages} />
          <form autoComplete="off" onSubmit={this.handleEvent.bind(this)}>
            <input ref="content"
                   autoFocus
                   placeholder="Write a message"
                   type="text"/>
            <button type="submit" value="Send" onClick={this.handleEvent.bind(this)}>
              <svg x="0px" y="0px" viewBox="0 0 60.064 60.064">
              <path d="M59.84,7.897c-0.218-0.268-0.556-0.393-0.893-0.353c-0.077,0.004-0.149,0.017-0.224,0.039L0.738,23.354  C0.312,23.47,0.012,23.852,0,24.293c-0.011,0.441,0.269,0.838,0.688,0.976l21.217,6.952l-1.898,15.182  c-0.05,0.4,0.145,0.791,0.494,0.991c0.155,0.089,0.327,0.133,0.498,0.133c0.215,0,0.43-0.069,0.608-0.206l7.765-5.946l6.807,9.725  c0.188,0.269,0.494,0.427,0.819,0.427c0.022,0,0.045-0.001,0.068-0.002c0.35-0.024,0.661-0.229,0.821-0.542l22.063-43  C60.134,8.631,60.09,8.205,59.84,7.897z M52.895,11.241L22.861,30.429L4.484,24.408L52.895,11.241z M22.288,45.281l1.382-11.053  l4.555,6.507L22.288,45.281z M36.868,49.594L24.418,31.808l32.1-20.508L36.868,49.594z" fill="#FFFFFF"/>
              </svg>
            </button>
          </form>
        </ChatContainer>
    );
  }

}

export default MainChat;
