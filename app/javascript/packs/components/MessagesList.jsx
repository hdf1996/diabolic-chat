import React, { Component } from 'react';
import styled from 'styled-components';
import MessageItem from './MessageItem';

const MsgList = styled.ul`
  flex: 1;
  background: ${props => props.theme.color2};
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  padding: 15px 12.5%;
  box-sizing: border-box;
  max-height: calc(100vh - 85px);
  overflow: auto;
`;
const Overflow = styled.div`
  display: flex;
  flex: 1 1 100%;
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  position: relative;
`;
const Gradient = styled.div`
  background: linear-gradient(to bottom,  rgba(29,31,52,1) 25%,rgba(142,174,178,0) 100%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  z-index: 9;
`;


function currentHeight(){
  return document.getElementById('msg-list').scrollHeight;
}

class MessagesList extends Component {

  constructor () {
    super();
    this.state = { messages: [] }
  }
  componentWillReceiveProps (props) {
    this.setState(props);

    if(this.state.messages.length > 0){
      let listItemHeight = document.querySelector('#msg-list li:last-of-type').scrollHeight;
      // for every msg sent it scrolls down, strangely it need a setTimeout to process the new height
      if (currentHeight() > ( document.body.scrollHeight - listItemHeight )){
        setTimeout(
          () => {
            document.getElementById('msg-list').scrollTop =  currentHeight() + listItemHeight;
          }, 1
        )
      }
    }

  }

  render() {
    return (
        <Overflow>
          <Gradient />
          <MsgList id="msg-list">
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
