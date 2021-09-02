import styled from 'styled-components';
import { Status as StatusType } from 'types/Status';

interface Props {
  status: StatusType;
}

export const Status = styled.div<Props>`
  position: relative;
  padding-left: 15px;
  font-size: 0.8rem;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: ${({ status }) => {
      if (status === 'Alive') return 'rgb(85, 204, 68)';
      if (status === 'Dead') return 'rgb(214, 61, 46)';
      return 'rgb(158, 158, 158)';
    }};
  }
`;
