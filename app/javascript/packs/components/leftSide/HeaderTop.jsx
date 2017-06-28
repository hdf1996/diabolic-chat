import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  background: ${props => props.theme.color1};
  min-height: 100px;
  > *{
    flex: 1;
  }
`;



class HeaderTop extends Component {


  render() {
    return (
      <Header>
        <button>
          Gear
        </button>
        <a href="#">
          Logo
        </a>
        <button>
          Profile
        </button>
      </Header>
    );
  }

}

export default HeaderTop;
