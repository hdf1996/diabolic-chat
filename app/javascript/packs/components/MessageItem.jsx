import React, { Component } from 'react';
import styled from 'styled-components';

const MsgItem = styled.li`
  background: white;
  color: black;
  width: 100%;
  max-width: 250px;
  padding: 15px;
  box-sizing: border-box;
`;

class MessageItem extends Component {

  render() {
    return (
        <MsgItem>
          {this.props.newMsg.sent_by} : {this.props.newMsg.body}
        </MsgItem>
    );
  }

}

export default MessageItem;
