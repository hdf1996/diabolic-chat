import React, { Component } from 'react';
import styled from 'styled-components';
import ChannelItem from './ChannelItem';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  color: white;
`;



class ChannelList extends Component {
  constructor () {
    super();
    this.state = {
      channels: []
    }
  }

  fetchChannelList = async () => {
    let response = await(fetch('/api/v1/sects'))
    let data = await(response.json());
    this.setState({
      channels: data.map((data) => {
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
          this.state.channels.map((channel) => {
            return <ChannelItem key={channel.id} {...channel}/>
          })
        }
      </List>
    );
  }

}

export default ChannelList;
