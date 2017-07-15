import React, { Component } from 'react';
import styled from 'styled-components';
// import SignUp from './SignUp';

const Header = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  background: ${props => props.theme.color1};
  min-height: 100px;
  > *{
    flex: 1;
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
        <button>
          Gear
        </button>
        <a href="#">
          Logo
        </a>
        <button>
          Profile
        </button>

        {/* <button onClick={this.signUpModal}>
          Sign up
        </button> */}

        {/* {isVisible == "visible" ? <SignUp /> : null } */}




      </Header>
    );
  }

}

export default HeaderTop;
