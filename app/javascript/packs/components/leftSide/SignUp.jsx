import React, { Component } from 'react';
import styled from 'styled-components';

const SignUpContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  min-height: 100px;
  position: fixed;
  top: 0;
  left: 0;
`;



class SignUp extends Component {

  render() {
    return (
        <SignUpContainer>

          hola

        </SignUpContainer>

    );
  }

}

export default SignUp;
