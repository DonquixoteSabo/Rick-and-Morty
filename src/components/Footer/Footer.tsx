import React from 'react';

import { Wrapper } from './Footer.styles';

const Footer = () => {
  return (
    <Wrapper>
      <header>
        {'<>'} by{' '}
        <a href="https://github.com/DonquixoteSabo">Kamil Budzik 2022</a>
      </header>
      <a href="https://github.com/DonquixoteSabo/Rick-and-Morty">
        Code on github
      </a>
      <br />
      <a
        target="_blank"
        className="inspiration"
        href="https://rickandmortyapi.com/"
        rel="noreferrer"
      >
        Inspiration and API
      </a>
    </Wrapper>
  );
};

export default Footer;
