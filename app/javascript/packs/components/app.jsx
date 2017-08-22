import React from 'react'
import PropTypes from 'prop-types'
import MenuLeft from './leftSide/MenuLeft'
import MainChat from './MainChat'
import NotificationBar from './NotificationBar'
import styled, {ThemeProvider}  from 'styled-components';
import './helpers'
const MainContainer = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
`;

// changin my theme
const colorTheme = {
	color1: "#18192B",
	color2: "#1D1F34",
	color3: "#151424",
  color4: "#232345",
  btnPrimary: "#18192B",
  scrollBar: "#232345"
};
// changin my theme
const darkTheme = {
	color1: "#171717",
	color3: "#1e1d1d",
	color2: "#181818",
	color4: "#151515",
	btnPrimary: "#FF476A",
	scrollBar: "#FF476A"
};

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      currentUser: {
        id: -1
      },
      currentConversationId: -1
    }
  }

  componentWillMount () {
    window.appComponent = this;
    window.checkUser();
  }

  render () {
    return (
      <ThemeProvider theme={localStorage.theme == 'darkTheme' ? darkTheme : colorTheme}>
        <MainContainer>
          <NotificationBar/>
          <MenuLeft
            currentConversationId={this.state.currentConversationId} />
          <MainChat
            currentConversationId={this.state.currentConversationId}
            currentUser={this.state.currentUser}/>

        </MainContainer>
      </ThemeProvider>
    )
  }
};
