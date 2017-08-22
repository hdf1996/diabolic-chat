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
  > div{
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: 350px;
    width: 100%;
    max-width: 700px;
    color: black;
  }

`;

const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 32px;
  color: black;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;




class OptionModal extends Component {
  constructor(){
    super();
    // this.state = {option : "hidden"}
    this.closeModal = this.closeModal.bind(this);
  }
  changeDarkTheme = () =>{
    localStorage.setItem('theme', 'darkTheme');
  }

  changeDefaultTheme = () =>{
    localStorage.setItem('theme', 'defaultTheme');
  }

  closeModal = () =>{
    if (this.props.handleOnClose) {
      this.props.handleOnClose()
    }
  }

  render() {
    if(this.props.isActive != "visible"){
      return null
    }
    return (
      <OptionModalContainer>
        <div>
          <CloseButton onClick={this.closeModal}>
            ×
          </CloseButton>
          <h2>
            Change theme:
          </h2>
          <button onClick={this.changeDarkTheme}>
            Dark theme
          </button>

          <button onClick={this.changeDefaultTheme}>
            Default theme
          </button>

        </div>

      </OptionModalContainer>
    );
  }

}

export default OptionModal;
