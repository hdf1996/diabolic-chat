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
  padding: 15px 12.5%;
  box-sizing: border-box;
  max-height: calc(100vh - 100px);
  overflow: auto;
  padding-bottom: 100px;
`;
const Overflow = styled.div`
  display: flex;
  flex: 1 1 100%;
  width: 100%;
  flex-direction: column;
  position: relative;
`;
const Gradient = styled.div`
  background: linear-gradient(to bottom,  rgba(29,31,52,1) 15%,rgba(142,174,178,0) 100%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
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
        <Overflow>
          <Gradient />
          <MsgList>
            {
              this.state.messages.map((message, i) => {
                return <MessageItem key={i} {...message} />
              })
            }
          </MsgList>
        </Overflow>
    );
  }

}

export default MessagesList;
