import { Link } from "gatsby";
import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";
import { Container} from "react-grid-system";

const Background = styled.header`
  margin: 0;
  padding: 0;
  color: #fff;
  margin: 0;
  background: linear-gradient(to right, #200122, #6f0000);
`;

const ParticleContainer = styled.div`
  position: absolute;
`;

const LogoText = styled.img`
  position: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 25%;
  @media only screen and (max-width: 1024px) {
    content:url("/logosmall.png");
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

        <LogoText src="/logo.png" />
    </Link></Container>
    <ParticleContainer><Particles
      height="20vh"
      width="100vw"
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
    /></ParticleContainer>
  </Background>
);

export default Header;
