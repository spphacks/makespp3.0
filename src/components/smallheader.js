import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Container} from "react-grid-system";

const Background = styled.header`
  margin: 0;
  padding: 0;
  color: #fff;
  margin: 0;
  background: linear-gradient(to right, #200122, #6f0000);
  `;

const LogoText = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-height: 150px;
  padding: 25px;
  @media only screen and (max-width: 1024px) {
    content:url("/logosmall.svg");
    position: auto;
    margin-left: auto;
    margin-right: auto;
    width:13%;
  }
`;

const Header = ({ siteTitle }) => (
  <Background>
    <Container><Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`
      }}
    >
      {" "}

        <LogoText src="/logo.svg" />
    </Link></Container>
  </Background>
);

export default Header;
