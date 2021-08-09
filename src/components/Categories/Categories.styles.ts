import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 3em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Button = styled.button`
  width: 30%;
  min-width: 300px;
  padding: 1em;
  margin: 1em;
  outline: none;
  border: none;
  background: rgb(158, 158, 158);
  color: white;
  transition: ease 0.1s;
  &:hover,
  .active {
    background: rgb(255, 152, 0);
  }
`;
