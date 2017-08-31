import React, { Component } from 'react';
import styled from 'styled-components';

const OptionModalContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 99;
  background: rgba(0,0,0,0);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  button{
    cursor: pointer;
    &:first-of-type{
      background: ${props => props.theme.btnPrimary };
      color: white;
      width: 50px;
      padding: 10px;
      border: none;

    }
    &:last-of-type{
      width: 200px;
      background: ${props => props.theme.btnPrimary };
      border: none;
      padding: 15px;
      margin-left: 15px;
      color: white;
    }
    &:active, &:focus{
      outline: none;
      border: none;
      box-shadow: none;
      
    }
  }
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
  animation: modalContainer 0.3s ease;
  @keyframes modalContainer {
    0%{
      transform: scale(0.3);
      opacity: 0;
    }

    100%{
      opacity: 1;
      transform: scale(1);
    }

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
    this.state = {currentTheme : localStorage.getItem('theme')}
    this.closeModal = this.closeModal.bind(this);
  }
  changeTheme = () =>{
    const currentTheme = localStorage.getItem('theme');
    if(currentTheme == "defaultTheme"){
      localStorage.setItem('theme', 'darkTheme');
      this.setState({currentTheme: 'darkTheme'})
    }
    if(currentTheme == "darkTheme"){
      localStorage.setItem('theme', 'defaultTheme');
      this.setState({currentTheme: 'defaultTheme'})
    }
    if (this.props.changeTheme) {
      this.props.changeTheme()
    }

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
          <button onClick={this.changeTheme}>
            Switch to {this.state.currentTheme == 'defaultTheme' ? "Dark Theme" : "Default Theme"}
          </button>


        </div>

      </OptionModalContainer>
    );
  }

}

export default OptionModal;
