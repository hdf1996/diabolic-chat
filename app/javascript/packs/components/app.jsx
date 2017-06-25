import React from 'react'
import PropTypes from 'prop-types'
import MenuHeader from './MenuHeader'

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

  send = (e) => {
    fetch('/chats?test=test', { method: "POST"})
    e.preventDefault();
    return false;
  }

  render () {
    return (
      <div>
        <MenuHeader />
        <div></div>
        <input placeholder="Do you want to chat with the devil?"
               type="text"
               />
        <a href="#" onClick={this.send}>Send it!</a>
      </div>
    )
  }
};
