import React, { Component } from 'react';
import styled from 'styled-components';
import MessageItem from './MessageItem';

const MsgList = styled.ul`
  flex: 1;
  background: ${props => props.theme.color2};
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  padding: 15px 25px;
  box-sizing: border-box;
`;

class MessagesList extends Component {

  render() {
    return (
        <MsgList>
          <MessageItem newMsg={this.props.newItem} />
        </MsgList>
    );
  }

}

export default MessagesList;
