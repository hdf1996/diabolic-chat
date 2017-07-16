import React, { Component } from 'react';
import styled from 'styled-components';
import BulletStatus from './BulletStatus';

const Item = styled.li`
  display: flex;
  color: white;
  background: ${props => props.theme.color3};
  cursor: pointer;
  position: relative;
  padding: 30px 0;
  &:hover{
    .item-line{
      transform: translateX(0);
    }
  }
  &.selected {
    color: green;
  }
  .channel-name{
    display: inline-block;
    flex: 0 0 190px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .item-line{
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background: white;
    box-shadow: 0px 0px 5px rgba(255,255,255,0.8);
    transform: translateX(-100%);
    transition: 0.3s cubic-bezier(.77,0,.18,1);
  }
`;



class ConversationItem extends Component {
  constructor (props) {
    super();
    this.state = {
      id: props.id || -1,
      name: props.name || '',
      unreadMessagesCount: props.unreadMessagesCount || 0,
      connected: props.connected || false,
      type: props.type || ''
    }
  }

  componentWillReceiveProps (props) {
    this.setState(props);
  }

  bullet = () => {
    if(this.state.type == 'Channel') {
      return <div>C</div>;
    } else {
      return <BulletStatus connected={this.state.connected}/>
    }
  }

  name = () => {
    return this.state.type == 'Channel' ? `#${this.props.name}` : this.props.name
  }

  render() {
    return (
      <Item onClick={this.props.onClick} className={this.state.selected ? 'selected' : ''}>
        {this.bullet()}
        <span className="channel-name">
          {this.name()}
        </span>
        <div className="item-line">
        </div>
      </Item>
    );
  }

}

export default ConversationItem;
