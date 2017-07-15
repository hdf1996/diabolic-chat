import React, { Component } from 'react';
import styled, {ThemeProvider} from 'styled-components';

const Bullet = styled.div`
    display: inline-block;
    width: 15px;
    height: 15px;
    margin: 0 10px;
    border-radius: 50%;
    background: ${props => props.theme.backgroundColor};
    opacity: ${props => props.theme.opacity};
    box-shadow: ${props => props.theme.shadow};
`;

const offline = {
	backgroundColor: "white",
  opacity: 0.5
};

const alert = {
	backgroundColor: "white",
  opacity: 1,
  shadow: "0px 0px 20px rgba(255,255,255,0.8)"
};

const online = {
	backgroundColor: "#7FEC99",
  opacity: 1
};

class BulletStatus extends Component {
  constructor (props) {
    super(props)
    this.state = {
      connected: props.connected || false
    }
  }

  componentWillReceiveProps (props) { this.setState(props); }

  render() {
    const theme = this.state.connected ? online : offline;
    return (
      <ThemeProvider theme={theme}>
        <Bullet />
      </ThemeProvider>
    );
  }

}

export default BulletStatus;
