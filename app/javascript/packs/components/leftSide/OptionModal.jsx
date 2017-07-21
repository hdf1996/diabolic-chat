import React, { Component } from 'react';
import styled from 'styled-components';

const OptionModalContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 99;
  background: rgba(0,0,0,0.7);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;


class OptionModal extends Component {
  constructor(){
    super();
    // this.state = {option : "hidden"}
    // this.optionModal = this.optionModal.bind(this);
  }

  render() {
    return (
      <OptionModalContainer>
        hola

      </OptionModalContainer>
    );
  }

}

export default OptionModal;
