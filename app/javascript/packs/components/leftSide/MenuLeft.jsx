import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderTop from './HeaderTop';
import ChannelList from './ChannelList';

const Header = styled.nav`
  height: 100vh;
  flex: 0 1 250px;
  max-width: 250px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  color: white;
  background: ${props => props.theme.color1};
`;



class MenuLeft extends Component {


  render() {
    return (
      <Header>
        <HeaderTop />

        <h2>
          Channels:
        </h2>

        <ChannelList/>

      </Header>
    );
  }

}

export default MenuLeft;
