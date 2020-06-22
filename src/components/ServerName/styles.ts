import styled from 'styled-components';
import { MdExpandMore } from 'react-icons/md';

export const Container = styled.div`
  grid-area: SN;

  background-color: var(--secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 11px 0 16px;

  box-shadow: rgba(0,0,0,0.2) 0 1px 0 0;
  z-index: 2;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: var(--white);
`;

export const ExpandIcon = styled(MdExpandMore)`
  width: 28px;
  height: 28px;

  color: var(--white);
  cursor: pointer;
`;