import styled from 'styled-components';
import { Props } from '.';
import { FaHashtag, FaUserPlus } from 'react-icons/fa'
import { MdSettings } from 'react-icons/md'

export const Container = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  padding: 5px 3px;

  border-radius: 5px;

  background-color: transparent;

  transition: background-color .2s;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    margin-left: 5px;
    color: var(--senary);
  }

  &.active, &:hover {
    background-color: var(--quinary);
    
    > div span {
      color: var(--white);
    }
  }
`;

export const HashtagIcon = styled(FaHashtag)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
`;

export const InviteIcon = styled(FaUserPlus)`
  width: 16px;
  height: 16px;
  color: var(--symbol);

  cursor: pointer;
  transition: color .2s;

  margin-right: 5px;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(MdSettings)`
  width: 16px;
  height: 16px;
  color: var(--symbol);

  cursor: pointer;
  transition: color .2s;

  margin-right: 5px;

  &:hover {
    color: var(--white);
  }
`;


