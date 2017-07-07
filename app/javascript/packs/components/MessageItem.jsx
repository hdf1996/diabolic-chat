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
  constructor (props) {
    super()
    this.state = props
  }

  componentWillReceiveProps (props) {
    console.log(props)
    this.setState(props)
  }

  render () {
    return (
      <MsgItem>
        {this.state.sent_by} : {this.state.body}
      </MsgItem>
    );
  }

}

export default MessageItem;
