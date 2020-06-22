import React from 'react';
import { Button } from './styles';
import { FiCoffee } from 'react-icons/fi';

export interface Props {
  selected ?: boolean,
  isHome ?: boolean,
  hasNotifications ?: boolean,
  mentions ?: number
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      { isHome && <FiCoffee size={22} color="#fff"/>}
    </Button>
  )
}

export default ServerButton;