import styled from 'styled-components';
import { MdHeadset, MdMic, MdSettings } from 'react-icons/md'

export const Container  = styled.div`
  grid-area: UI;

  display: flex;
  justify-content: space-between;

  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: rgba(0,0,0,0.2) 0 1px 0 0;
`;

export const Profile  = styled.div`
  display: flex;
  align-items: center;
  color: var(--white);
`;

export const Avatar  = styled.div`
  width: 32px;
  height: 32px;
  background-color: var(--gray);
  border-radius: 50%;

  &::after {

  }
`;

export const UserData  = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 8px;

  > strong {
    display: block;
    font-size: 13px;
  }

  > span {
    font-size: 13px;
    color: var(--gray);
  }
`;

export const Icons  = styled.div`
  display: flex;
  align-items: center;

  > svg:not(:first-child) {
    margin-left: 7px;
  }
`;

export const MicIcon  = styled(MdMic)`
  width: 20px;
  height: 20px;
  
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;

  transition: opacity .2s;

  &:hover {
    opacity: 1;
  }
`;

export const FoneIcon  = styled(MdHeadset)`
  width: 20px;
  height: 20px;
  
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;

  transition: opacity .2s;

  &:hover {
    opacity: 1;
  };
`;

export const SettingsIcon = styled(MdSettings)`
  width: 20px;
  height: 20px;
  
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;

  transition: opacity .2s;

  &:hover {
    opacity: 1;
  }
`;
