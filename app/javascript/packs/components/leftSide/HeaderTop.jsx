import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
// import SignUp from './SignUp';

const Header = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  background: ${props => props.theme.color3};
  min-height: 100px;
  margin-bottom: 50px;
  > *{
    flex: 0 0 33%;
  }
`;



class HeaderTop extends Component {
  constructor(){
    super();
    this.state = {signUp : "hidden"}
    this.signUpModal = this.signUpModal.bind(this);
  }

  signUpModal(e) {
    e.stopPropagation();
    this.setState({signUp:"visible"});
  }

  render() {
    const isVisible = this.state.signUp;
    return (
      <Header>
        {/* <button>
          Gear
        </button> */}
        <Logo />
        {/* <button>
          Profile
        </button> */}

        {/* <button onClick={this.signUpModal}>
          Sign up
        </button> */}

        {/* {isVisible == "visible" ? <SignUp /> : null } */}




      </Header>
    );
  }

}

export default HeaderTop;
