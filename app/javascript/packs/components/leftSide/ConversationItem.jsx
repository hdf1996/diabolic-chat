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
  margin-bottom: 10px;
  transition: 0.3s ease;
  &:hover:not(.selected){
    > div:first-of-type{
      transform: scale(1);
    }
  }
  &.selected {
    text-shadow: 0px 0px 5px rgba(255,255,255,0.8);
  }
  .channel-name{
    display: inline-block;
    flex: 0 0 190px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: 0.3s ease;
    font-weight: 500;
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
      // Habria que cambiar ese div de abajo por un bullet status, pero con el iconito de channel
      return <BulletStatus type="channel" selected={this.state.selected} connected={this.state.connected}/>;
    } else {
      return <BulletStatus type="direct" selected={this.state.selected} connected={this.state.connected}/>
    }
  }

  name = () => {
    //return this.state.type == 'Channel' ? `${this.props.name}` : this.props.name
    // ya estoy evaluando en bullet() si es un channel o un direct message
    return this.props.name
  }

  render() {
    return (
      <Item onClick={this.props.onClick} className={this.state.selected ? 'selected' : ''}>
        {/* <p>
          {this.state.unreadMessagesCount}
        </p> */}
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
