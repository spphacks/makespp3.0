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
  padding-left: 71px;
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
const Tagline = styled.h1`
  position: absolute;
  top: 133px;
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
    top: 100px;
    font-size: 33px;
    padding-left: 3%;
  }
`;

const SubTagline = styled.h1`
  position: absolute;
  top: 353px;
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
    font-size: 17px;
    padding-left: 3%;
  }
`;

const Date = styled.h1`
  position: absolute;
  bottom: 10px;
  border-bottom: 5px solid #ffffff;
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

const Header = ({ siteTitle }) => (
  <Background>
    <div className="video">
      <br/><br/><Iframe
        url="https://www.youtube-nocookie.com/embed/_pffiCMj-gw?fs=0;color=white;rel=0"
        allow="accelerometer; encrypted-media; picture-in-picture; gyroscope"
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
      <LogoContainer>
        <LogoText src="/logotext.png" />
      </LogoContainer>
    </Link>
    <LogoContainer>
      <Logo src="/logo.png" />
    </LogoContainer>
    <Tagline> <br /> New Jersey's Premier Virtual High School Hackathon </Tagline>

    <SubTagline>
      <br / ><br />Learn to build & pitch a product with workshops, free food, and thousands in prizes.
    </SubTagline>

    <Date>October 9-11, 2020</Date>

    <Link to="https://makespp.typeform.com/to/ZzGcLGKb">
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
