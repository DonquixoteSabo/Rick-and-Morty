import styled from 'styled-components';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  font-size: 22px;
  .img-container {
    width: 329px;
    margin-bottom: 1em;
  }
  .information {
    color: gray;
    font-size: 0.9rem;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 5%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  }
`;
