import React from 'react'
import PropTypes from 'prop-types'
import MenuHeader from './MenuHeader'
import MainChat from './MainChat'
import styled from 'styled-components';

const MainContainer = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;


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
      <MainContainer>

        <MenuHeader />
        <MainChat />

      </MainContainer>
    )
  }
};
