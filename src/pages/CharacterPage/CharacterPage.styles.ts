import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const StyledLink = styled(Link)`
  position: absolute;
  top: 5%;
  left: 5%;
  padding: 20px;
  color: white;
  text-decoration: none;
  display: grid;
  place-items: center;
`;

export const LeftArrow = styled.i`
  position: relative;
  background: #fff;
  height: 3px;
  width: 30px;
  margin: 0 auto;
  cursor: pointer;

  &:before,
  &:after {
    content: '';
    background: #fff;
    position: absolute;
    height: 3px;
    width: 15px;
  }

  &:before {
    left: -3px;
    bottom: 4px;
    transform: rotate(-45deg);
  }

  &:after {
    left: -3px;
    top: 4px;
    transform: rotate(45deg);
  }
`;

export const Container = styled.section`
  position: relative;
`;
