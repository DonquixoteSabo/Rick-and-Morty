import styled from 'styled-components';

export const Wrapper = styled.footer`
  color: rgb(158, 158, 158);
  background: rgb(32, 35, 41);
  text-align: center;
  padding: 3em 0;

  a {
    display: inline-block;
    cursor: pointer;
    text-decoration: underline #f08d49;
    color: white;
    font-weight: 500;
    transition: 0.3s ease-in-out;
    padding: 0.5em 0;

    &:hover {
      color: #f08d49;
      text-decoration: none;
    }
  }

  .inspiration {
    margin-top: 3em;
  }
`;
