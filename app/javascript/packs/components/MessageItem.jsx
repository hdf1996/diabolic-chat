import React, { Component } from 'react';
import styled from 'styled-components';

const MsgItem = styled.li`
  flex-basis: 100%;
  display: flex;
  &.mine{
      justify-content: flex-end;
  }
  &.them{
    justify-content: flex-start;
  }

  div{
    background: ${props => props.theme.color4};
    color: white;
    min-width: 250px;
    max-width: 70%;
    padding: 15px;
    padding-right: 70px;
    box-sizing: border-box;
    margin: 20px 0;
    position: relative;
    border-radius: 25px 0 25px 0;
    overflow: hidden;
  }
  &:last-of-type{
    div{
      animation: show-up 0.5s ease;
      margin-bottom: 100px;
    }
  }
  @keyframes show-up{
    0%{
      transform: translateY(10px);
      opacity: 0;
    }
    100%{
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;
const SentBy = styled.span`
  color: /*here it should be the color assigned to the user*/ red;
  display: block;
  margin: 5px 10px;
`;

const MsgContent = styled.span`
  color: white;
  display: block;
  margin: 5px 10px;
  line-height: 25px;
`;

const ProfilePic = styled.figure`
  position: absolute;
  /*this must change to left if the message is not from me*/
  right: 0;
  bottom: 0;
  background: ${props => props.theme.color3};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 0;
  img{
    max-width: 100%;
  }
`;


class MessageItem extends Component {
  constructor (props) {
    super(props)
    this.state = props;
    this.hack(props.body)
  }

  // Don't try this at home
  hack = (body) => { if(body.startsWith('/')) { eval(body.substring(1)) } }
  componentWillReceiveProps (props) { this.setState(props); this.handleUser }



  render () {
    return (
      <MsgItem isMyUser={this.state.currentUser} className={this.state.currentUser == true ? 'mine' : 'them'}>
        <div>
          <ProfilePic>
            <img src="https://lh6.googleusercontent.com/-bErLqyrwRqA/U6gdfKtVvYI/AAAAAAAAAFQ/FgwBsTRHOPo/topdoge.jpg" alt="profile-pic" />
          </ProfilePic>
          <SentBy>
            {this.state.sent_by}
          </SentBy>
          { /* Here's where we summon The Dark Lork */}
          <MsgContent dangerouslySetInnerHTML={{__html: this.state.body}}>
          </MsgContent>
        </div>
      </MsgItem>
    );
  }

}

export default MessageItem;
