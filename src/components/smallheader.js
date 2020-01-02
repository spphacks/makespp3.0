import { Link } from "gatsby";
import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";
import Iframe from "react-iframe";

const Background = styled.header`
  width: 100vw;
  height: 20vh;
  margin: 0;
  color: #fff;
  padding: 0;
  background: linear-gradient(180deg, #141e30, #20354c, #3d6591);
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
const Tagline = styled.h1`
  position: absolute;
  top: 125px;
  max-width: 500px;
  font-size: 3.5rem;
  padding-left: 5%;
  color: #fff;

  @media only screen and (max-width: 1024px) {
    font-size: 48px;
    top: 80px;
  }
`;

const SubTagline = styled.h1`
  position: absolute;
  top: 400px;
  max-width: 500px;
  font-size: 2rem;
  padding-left: 5%;
  color: #fff;

  @media only screen and (max-width: 1024px) {
    font-size: 24px;
    top: 360px;
  }
`;

const Date = styled.h1`
  position: absolute;
  bottom: 110px;
  border-bottom: 5px solid #ca043f;
  margin-left: 5%;
`;

const Register = styled.h3`
  position: absolute;
  bottom: 30px;
  margin-left: 5%;
  padding: 10px;
  border: 5px solid #fff;
  border-radius: 10px;
  font-size: 24px;
  text-decoration: none;
  color: #fff;
  transition: all 300ms ease;
  &:hover {
    background: #ca043f;
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
        Make<span className="red">SPP</span> <span className="two">3.0</span>
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
            value: 200,
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
            speed: 1,
            direction: "top",
            out_mode: "out"
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble"
            },
            onclick: {
              enable: true,
              mode: "repulse"
            }
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0
            },
            repulse: {
              distance: 25,
              duration: 1
            }
          }
        }
      }}
    />
  </Background>
);

export default Header;
