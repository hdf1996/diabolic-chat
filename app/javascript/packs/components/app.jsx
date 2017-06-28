import React from 'react'
import PropTypes from 'prop-types'
import MenuLeft from './leftSide/MenuLeft'
import MainChat from './MainChat'
import styled, {ThemeProvider}  from 'styled-components';

const MainContainer = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

// changin my theme
const colorTheme = {
	color1: "#18192B",
	color2: "#1D1F34",
	color3: "#151424"
};
// changin my theme
const darkTheme = {
	color1: "black",
	color2: "red"
};


export default class App extends React.Component {
  componentWillMount () {
    Application.cable.subscriptions.create({
      channel: "ChatChannel",
      room: 'chat_room'
    },
    {
      connected: () => { console.log('conected')},
      received: (d) => {
        console.log(d)
      }
    })
  }

  render () {
    return (
      <ThemeProvider theme={colorTheme}>
        <MainContainer>

          <MenuLeft />
          <MainChat />

        </MainContainer>
      </ThemeProvider>
    )
  }
};
