import React, { Component } from 'react';
import styled, {ThemeProvider} from 'styled-components';
// import logo from './logo.svg';

const ChatContainer = styled.section`
  height: 100%;
  min-height: 100vh;
  align-items: flex-start;
  flex: 1 1 50%;
  display: flex;
  flex-wrap: wrap;
  background: ${props => props.theme.background};
`;


ChatContainer.defaultProps = {
	theme: {
		background: 'blue'
	}
}

// changin my theme
const themeV1 = {
	background: '#1D1F34'
};

class MainChat extends Component {

  send = (e) => {
    fetch('/chats?test=test', { method: "POST"})
    e.preventDefault();
    return false;
  }

  render() {
    return (
      <ThemeProvider theme={themeV1}>
        <ChatContainer>
          <input placeholder="Do you want to chat with the devil?"
                 type="text"
                 />
          <a href="#" onClick={this.send}>Send it!</a>
        </ChatContainer>
      </ThemeProvider>
    );
  }

}

export default MainChat;
