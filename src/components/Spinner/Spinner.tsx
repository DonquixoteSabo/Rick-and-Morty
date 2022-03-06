import React from 'react';

import { Wrapper } from './Spinner.styles';

const Spinner = () => {
  return (
    <Wrapper>
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </Wrapper>

  );
};

export default Spinner;