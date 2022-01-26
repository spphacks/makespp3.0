import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { Wrapper, Details } from './styles';
import styled from 'styled-components';

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-height: 200px;
`;

const Button = styled.button`
  display: inline-block;
  cursor: pointer;
  font-size: 16pt;
  padding: 10px;
  border: none;
  border-radius: 10px;
  min-width: 150px;
  transition: all 0.5s ease;
  background: #DCDCDC;
  color: black;
  :hover {
    background: #B2B2B2;
  }
`;

export const Submitted = () => {

  return (
    <div>
      <Wrapper>
        <Details>
          <Link to="/"><Logo src="/logo.svg"/></Link>
          <h1>Success!</h1>
          <p>
            Thanks for registering. You will receive an email soon with more details.
            <br/><br/>
            <Button as={Link} to="/">Back</Button>
          </p>
        </Details>
      </Wrapper>
    </div>
  );
};
