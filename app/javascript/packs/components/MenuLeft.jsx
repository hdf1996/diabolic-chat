import React, { Component } from 'react';
import styled, {ThemeProvider} from 'styled-components';
// import logo from './logo.svg';

const Header = styled.nav`
  height: 100vh;
  flex: 0 1 250px;
  display: flex;
  flex-wrap: wrap;
  background: ${props => props.theme.color1};
`;



class MenuLeft extends Component {


  render() {
    return (
      <Header>
        <p>
          hola soy un menu
        </p>
      </Header>
    );
  }

}

export default MenuLeft;
