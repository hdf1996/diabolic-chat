import React, { Component } from 'react';
import styled from 'styled-components';
import MessageItem from './MessageItem';

const MsgList = styled.ul`
  flex: 1;
  background: ${props => props.theme.color2};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px 25px;
  box-sizing: border-box;
`;

class MessagesList extends Component {
  constructor () {
    super();
    this.state = { messages: [] }
  }
  componentWillReceiveProps (props) {
    this.setState(props)
  }

  render() {
    return (
        <MsgList>
          {
            this.state.messages.map((message, i) => {
              return <MessageItem key={i} {...message} />
            })
          }
        </MsgList>
    );
  }

}

export default MessagesList;
