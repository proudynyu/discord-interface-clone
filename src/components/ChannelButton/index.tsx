import React from 'react';
import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles'

export interface Props {
  channelname ?: string,
  selected ?: boolean
}

const ChannelButton: React.FC<Props> = ({ channelname, selected }) => {
  return (
    <Container className={ selected ? 'active' : ''}>
      <div>
        <HashtagIcon />
        <span>{ channelname }</span>
      </div>

      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  )
}

export default ChannelButton;