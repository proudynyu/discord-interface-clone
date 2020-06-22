import React from 'react';
import { Container, Role, User, Avatar } from './styles';

export interface Props {
  nickname: string,
  isBot ?: boolean
}

const UserRow: React.FC<Props> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={ isBot ? 'bot' : '' } />

      <strong>{nickname}</strong>

      { isBot && <span>Bot</span> }
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponivel - 1</Role>
      <UserRow nickname="Igor Becker" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Nilton" isBot />
      <UserRow nickname="Someone" />
      <UserRow nickname="Someone" />
      <UserRow nickname="Someone" />
      <UserRow nickname="Someone" />
      <UserRow nickname="Someone" />
      <UserRow nickname="Someone" />
      <UserRow nickname="Someone" />
      <UserRow nickname="Someone" />
      <UserRow nickname="Someone" />
    </Container>
  )
}

export default UserList;