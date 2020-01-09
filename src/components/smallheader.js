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
  background: linear-gradient(to right, #c33764, #1d2671);
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

const Title = styled.h1`
  font-size: 64px;
  position: absolute;
  left: 50%;
  top: 30px;
  padding: 0;
  letter-spacing: -3px;
  margin: 0;
  transition: all 300ms ease;
  transform: translateX(-50%);
  &:hover {
    opacity: 0.8;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 56px;
    top: 0;
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
      <Title className="title">
        <span className="purple">make</span><span className="orange">spp</span> <span className="two">3.0</span>
      </Title>
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
            random: false,
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
