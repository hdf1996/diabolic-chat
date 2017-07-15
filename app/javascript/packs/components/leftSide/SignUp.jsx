import React, { Component } from 'react';
import styled from 'styled-components';

const SignUpContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  min-height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  justify-content: center;
  align-items: center;
  color: black;
`;

const FormContainer = styled.div`
  display: flex;
  background: white;
  width: 100%;
  max-width: 1000px;
  height: 100%;
  max-height: 500px;
  flex-wrap: wrap;
  form{
    flex: 0 0 50%;
  }
`;
const Advice = styled.article`
    flex: 0 0 50%;
`;
const InputContainer = styled.label`
    display: block;
    margin: 15px 0;
    position: relative;
    span{
      position: absolute;
      top: 10px;
      left: 0;
      transform: ${props => props.filled ? 'translate(0, -30px)' : 'translate(10px, 0)'};
      transition: 0.3s ease;
    }
    p{
      opacity: 0;
      display: block;
      text-align: center;
      font-size: 0.75em;
      transition: 0.3s ease;
      max-width: 320px;
      margin-top: 5px;
    }
    input{
      background: #ececec;
      border: none;
      width: 100%;
      box-sizing: border-box;
      padding: 12.5px;
      max-width: 320px;
    }
    input:focus{
      ~span{
        transform: translate(0, -30px);
        color: ${props => props.theme.color1};
      }
      ~p{
        opacity: 1;
      }
    }

`;



class SignUp extends Component {

  constructor () {
    super();
    this.state = {
      hasContent: false
    }
  }

  // NO PUEDO UPDATEAR UNA PROP A MI MISMO A TRAVES DE UN STATE

  isfilled = function(e){
    if(this.value != ""){
      this.setState({hasContent: true});
    }
    else{
      this.setState({hasContent: false});
    }
  }

  render() {
    return (
        <SignUpContainer>
          <FormContainer>

            <Advice>
              <p>
                Hola
              </p>
            </Advice>
            <form>

              <InputContainer>
                <input type="email" filled={this.state.hasContent} onChange={this.isfilled.bind(this)} />
                <span>
                  Your email
                </span>
                <p>
                  You won't receive spam
                </p>
              </InputContainer>
              <input type="text" placeholder="Hi! My username is" />
              <input type="password" placeholder="My strong password is" />
            </form>

          </FormContainer>


        </SignUpContainer>

    );
  }

}

export default SignUp;
