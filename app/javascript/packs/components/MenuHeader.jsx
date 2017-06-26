import React, { Component } from 'react';
import styled, {ThemeProvider} from 'styled-components';
// import logo from './logo.svg';

const Header = styled.nav`
  //position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  max-width: 250px;
  display: flex;
  flex-wrap: wrap;
  background: ${props => props.theme.background};
`;


Header.defaultProps = {
	theme: {
		background: 'palevioletred'
	}
}

// changin my theme
const themeV1 = {
	background: 'mediumseagreen'
};

class MenuHeader extends Component {


  render() {
    return (
      <ThemeProvider theme={themeV1}>
        <Header>
          <p>
            hola soy un menu
          </p>
        </Header>
      </ThemeProvider>
    );
  }

}

export default MenuHeader;
