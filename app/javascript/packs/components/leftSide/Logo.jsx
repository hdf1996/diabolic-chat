import React, { Component } from 'react';
import styled from 'styled-components';

const LogoContainer = styled.figure`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 80px;
  flex-basis: 80px;
  transform: translateY(10px);
  > a{
    border-radius: 50% 50% 0% 0%;
    display: flex;
    align-items: flex-end;
    height: 70px;
    width: 100px;
    background: ${props => props.theme.color1};
    &:hover{
      .blink{
        animation-iteration-count: infinite;
        animation-duration: 1s;
      }
    }
  }
  .logo-container{
    text-align: center;
    align-self: center;
    width: 100%;
    transform-origin: 40% 53%;
    border-radius: 0;
    transform: scale(0.5);
    img{
      width: 120px;
    }
  }
`;


class Logo extends Component {


  render() {
    const image_path = require('../../../../assets/images/logoweb.png');
    return (
      <LogoContainer>
        <a href="/">
          <figure className="logo-container">
            <figure className="the-logo">
              <div className="eye">
                <div className="blink"></div>
                <div className="blink"></div>
              </div>
              <div className="mouth"></div>
              <div className="ball"></div>
              <img src={image_path} />
            </figure>
          </figure>
        </a>
      </LogoContainer>
    );
  }

}

export default Logo;
