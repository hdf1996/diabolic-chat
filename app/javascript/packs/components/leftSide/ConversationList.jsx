import React, { Component } from 'react';
import styled from 'styled-components';
import ConversationItem from './ConversationItem';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  color: white;
`;



class ConversationList extends Component {
  constructor () {
    super();
    this.state = {
      conversations: []
    }
  }

  fetchChannelList = async () => {
    let response = await(fetch('/api/v1/sects'))
    let data = await(response.json());
    this.setState({
      conversations: data.map((data) => {
        return {
          key: data.id,
          id: data.id,
          name: data.name,
          unreadMessagesCount: data.unread_messages_count,
          connected: data.connected,
          type: data.type
        }
      })
    })
  }

  componentWillMount = () => {
    this.fetchChannelList();
  }

  render () {
    return (
      <List>
        {
          this.state.conversations.map((conversation) => {
            return <ConversationItem key={conversation.id} {...conversation}/>
          })
        }
      </List>
    );
  }

}

export default ConversationList;
