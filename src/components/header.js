import { Link } from "gatsby";
import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";
import Iframe from "react-iframe";

const Background = styled.header`
  width: 100vw;
  height: 100vh;
  margin: 0;
  color: #fff;
  padding: 0;
  background: linear-gradient(to right, #485563, #29323c);
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
  top: 100px;
  max-width: 500px;
  font-size: 3rem;
  padding-left: 5%;
  color: #fff;
  @media only screen and (max-width: 1024px) {
    font-size: 48px;
    top: 80px;
    padding-left: 3%;
  }
  @media only screen and (max-width: 600px) {
    top: 30px;
    font-size: 36px;
    padding-left: 3%;
  }
`;

const SubTagline = styled.h1`
  position: absolute;
  top: 320px;
  max-width: 500px;
  font-size: 24px;
  padding-left: 5%;
  color: #fff;
  @media only screen and (max-width: 1024px) {
    font-size: 24px;
    top: 350px;
    padding-left: 3%;
  }
  @media only screen and (max-width: 600px) {
    top: 230px;
    font-size: 20px;
    padding-left: 3%;
  }
`;

const Date = styled.h1`
  position: absolute;
  bottom: 10px;
  border-bottom: 5px solid #ca043f;
  margin-left: 5%;
`;

const Register = styled.h3`
  position: absolute;
  bottom: 60px;
  margin-left: 5%;
  padding: 10px;
  border: 5px solid #fff;
  border-radius: 10px;
  font-size: 28px;
  text-decoration: none;
  color: #fff;
  transition: all 300ms ease;
  &:hover {
    background: #ca043f;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 24px;
  }
`;

const Title = styled.h1`
  font-size: 64px;
  position: absolute;
  left: 50%;
  top: 30px;
  padding: 0;
  font-weight: 700;
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
    <div className="video">
      <br /> <br /><Iframe
        url="https://www.youtube.com/embed/_pffiCMj-gw"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        display="initial"
        position="relative"
        allowFullScreen
      />
    </div>
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
    <Tagline> <br /> New Jersey's Premier High School Hackathon </Tagline>

    <SubTagline>
      <br / ><br />Learn to build & pitch a product with workshops, free food, and thousands in prizes.
    </SubTagline>

    <Date>April 25th, 2020</Date>
    <Link to="/register">
      <Register> Register </Register>
    </Link>
    {/* <Link to="/live">
      <Register> MakeSPP Live </Register>
    </Link> */}
    <Particles
      height="100vh"
      params={{
        particles: {
          number: {
            value: 400,
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
      }}
    />
  </Background>
);

export default Header;
