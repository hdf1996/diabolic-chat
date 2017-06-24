import React from 'react'
import PropTypes from 'prop-types'

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
    fetch('/chat?test=test')
    e.preventDefault();
    return false;
  }

  render () {
    return (
      <div>
        <div></div>
        <input placeholder="Do you want to chat with the devil?"
               type="text"
               />
        <a href="#" onClick={this.send}>Send it!</a>
      </div>
    )
  }
};
