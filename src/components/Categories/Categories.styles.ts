import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.ul`
  margin-top: 3em;
  display: flex;
  justify-content: center;
  color: rgb(158, 158, 158);
`;

export const Typography = styled.li`
  list-style: none;
  margin: 1em;
  transition: ease 0.1s;
  font-size: 1.4rem;
  font-weight: 500;
  &:hover,
  .active {
    color: rgb(255, 152, 0);
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;
