import React, { Component } from 'react';
import styled from 'styled-components';
import ChannelItem from './ChannelItem';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  color: white;
`;



class ChannelList extends Component {


  render() {
    return (
      <List>
        <ChannelItem />
      </List>
    );
  }

}

export default ChannelList;
