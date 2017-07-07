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


  constructor(props){
    super(props);
    this.state= {value: '', newItem: ''};
    this.handleChange = this.handleChange.bind(this);

    // this.handleNewMessage = this.handleNewMessage.bind(this);
  }

  handleChange(e){
    this.setState({value: e.target.value});
  }
  // handleNewMessage(e){
  //   this.setState({newItem: e})
  // }
  componentWillMount () {
    Application.cable.subscriptions.create({
      channel: "ChatChannel",
      room: 'chat_room'
    },
    {
      connected: () => { console.log('conected')},
      received: (d) => {
        //here you change the body of the object from a sect with input's value
        d.body = this.state.value;
        // d = this.state.newItem;
        this.setState({newItem : d});
        console.log(d);
        //and this setState clears the input field
        this.setState({value : ''})
      }
    })
  }

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
          <MessagesList newItem ={this.state.newItem} />
          <form onSubmit={this.send}>
            <input value={this.state.value} onChange={this.handleChange} placeholder="Do you want to chat with the devil?"
                 type="text"
                 />
            <input type="submit" value="Send" />
          </form>
        </ChatContainer>
    );
  }

}

export default MainChat;
