import React, { Component } from 'react';
import styled from 'styled-components';

const MsgItem = styled.li`
  background: ${props => props.theme.color4};
  color: white;
  min-width: 250px;
  max-width: 70%;
  padding: 15px;
  box-sizing: border-box;
  margin: 20px 0;
  align-self: /* if it is my own user it should be flex-end, if it is other user it should be flex-start */ flex-end;
  span{
    color: /*here it should be the color assigned to the user*/ red;
    display: block;
    margin: 5px 10px;
  }
  p{
    color: white;
    display: block;
    margin: 5px 10px;
  }
  &:last-of-type{
    animation: show-up 0.3s ease;
  }
  @keyframes show-up{
    0%{
      transform: translateY(10px);
      opacity: 0;
    }
    100%{
      transform: translateY(0px);
      opacity: 1;
    }
  }
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
        <span>
          {this.state.sent_by}
        </span>
        <p>
          {this.state.body}
        </p>
      </MsgItem>
    );
  }

}

export default MessageItem;
