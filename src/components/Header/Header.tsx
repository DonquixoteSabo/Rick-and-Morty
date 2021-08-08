import React from 'react';

import background from 'assets/img/header-img.png';

import { Wrapper, Title, Image } from './Header.styles';

function Header() {
  return (
    <Wrapper>
      <Title>The Rick and Morty</Title>
      <Image src={background} />
    </Wrapper>
  );
}

export { Header };
