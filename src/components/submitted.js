import React, { useContext } from 'react';
import { Wrapper, Details } from './styles';

export const Submitted = () => {

  return (
    <div>
      <Wrapper >
        <Details >
          <h1>success!</h1>
          <p>
            thanks for joining! you will receive an email soon with details on how to begin.
          </p>
          <a href="/">
              back
          </a>
        </Details>
      </Wrapper>
    </div>
  );
};
