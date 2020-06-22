import React from 'react';
import ChannelButton from '../ChannelButton';
import { Container, Category, AddCategoryIcon } from './styles'



const ChannelList: React.FC = () => {
  return (
    <Container>

      <Category>
        <span>Canais de text</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelname="chat-livre" />
      <ChannelButton channelname="trabalho" />
      <ChannelButton channelname="lolzinho" />
      <ChannelButton channelname="csgo" />
      <ChannelButton channelname="valorant" />
    </Container>
  )
}

export default ChannelList;