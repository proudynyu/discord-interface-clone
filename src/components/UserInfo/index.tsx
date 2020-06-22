import React from 'react';
import { 
  Container, 
  Profile, 
  Avatar, 
  UserData, 
  Icons, 
  MicIcon, 
  FoneIcon, 
  SettingsIcon
} from './styles';

export interface Props {
  user: string,
  hashtag: string,
}

const UserInfo: React.FC<Props> = ({ user, hashtag }) => {
  return (
    <Container>
      
      <Profile>
        <Avatar />
        <UserData>
          <strong>{ user }</strong>
          <span>#{ hashtag }</span>
        </UserData>
      </Profile>

      <Icons >
        <MicIcon />
        <FoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  )
}

export default UserInfo;