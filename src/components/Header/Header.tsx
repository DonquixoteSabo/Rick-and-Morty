import React from 'react';

import { Wrapper, Title } from './Header.styles';

function Header() {
  return (
    <Wrapper>
      <Title exact to="/">
        The Rick and Morty
      </Title>
    </Wrapper>
  );
}

export { Header };
