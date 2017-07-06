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
      channels: [{
        id: 3,
        name: '#LosPibesDeLaVia',
        unreadMessagesCount: 99,
        type: 'group'
      }, {
        id: 4,
        name: '#LosPibesDeLaVia',
        unreadMessagesCount: 99,
        type: 'direct'
      }]
    }
  }

  fetchChannelList = async () => {
    let response = await(fetch('/api/v1/sects'))
    let data = await(response.json());
    this.setState({
      channels: data.map((data) => {
        return {
          id: data.id,
          name: data.name,
          unreadMessagesCount: data.unread_messages_count,
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
