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



class ChannelItem extends Component {
  componentWillReceiveProps (props) {
    this.setState(props);
  }

  render() {
    return (
      <Item>
        <BulletStatus />
        <span className="channel-name">
          {this.props.name}
        </span>
        <div className="item-line">
        </div>
      </Item>
    );
  }

}

export default ChannelItem;
