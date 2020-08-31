import { Link } from "gatsby";
import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";

const Background = styled.header`
  width: 100vw;
  height: 20vh;
  margin: 0;
  color: #fff;
  padding: 0;
  background: linear-gradient(to right, #F11712, #0099F7);
`;

const LogoContainer = styled.div`
  margin: 0;
  position: absolute;
  padding: 0;
  margin: 0;
`;
const Logo = styled.img`
  padding-top: 30px;
  height: 75px;
  padding-left: 30px;
  filter: drop-shadow(0px 0px 5px #ca043f);
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
const LogoText = styled.img`
  position: auto;
  padding-top: 30px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 25%;
  @media only screen and (max-width: 1024px) {
    content:url("/logo.png");
    position: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width:10%;
  }
`;

// temp solution for video --  future use youtube component autoplay
const Header = ({ siteTitle }) => (
  <Background>
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`
      }}
    >
      {" "}
      <LogoContainer>
        <LogoText src="/logotext.png" />
      </LogoContainer>
    </Link>
    <LogoContainer>
      <Logo src="/logo.png" />
    </LogoContainer>

    <Particles
      height="20vh"
      params={{
        particles: {
          number: {
            value: 300,
            density: {
              enable: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3
            }
          },
          line_linked: {
            enable: false
          },
          move: {
            random: true,
            speed: 1.5,
            direction: "top",
            out_mode: "out"
          }
        },
      }}
    />
  </Background>
);

export default Header;
