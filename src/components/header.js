import { Link } from "gatsby";
import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";
import { Container} from "react-grid-system";

const Background = styled.header`
  height: 100vh;
  margin: 0;
  padding: 0;
  color: #fff;
  margin: 0;
  background: linear-gradient(to right, #200122, #6f0000);
  @media only screen and (max-width: 1024px) {
  height: 90vh;
}
  @media only screen and (max-width: 768px) {
    height: 70vh;
}
@media only screen and (max-width: 400px) {
  height: 90vh;
}
`;

const ParticleContainer = styled.div`
  position: absolute;
`;

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 58%;
  @media only screen and (max-width: 1024px) {
    content:url("/logosmall.png");
    position: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 25%;
}
`;

const Tagline = styled.h1`
  text-align: center;
  max-width: 900px;
  font-size: 3rem;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  @media only screen and (max-width: 1024px) {
    font-size: 48px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 33px;
    padding: 14px;
  }
`;

const SubTagline = styled.h1`
  text-align: center;
  max-width: 700px;
  font-size: 24px;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  @media only screen and (max-width: 1024px) {
    max-width: 600px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 17px;
    max-width: 500px;
    padding: 14px;
  }
`;

const Date = styled.h1`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @media only screen and (max-width: 1024px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

const Register = styled.h1`
  display: flex;
  justify-content: center;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0px;
  padding: 10px;
  border: 5px solid #fff;
  border-radius: 10px;
  font-size: 40px;
  color: #fff;
  transition: all 300ms ease;
  &:hover {
    background: #ca043f;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }


  animation: 1s Zoom linear infinite,
  2s Always ease alternate infinite;
  }
  @keyframes Zoom {
      100% { background-position: 100vw 0px; }
  }

  @keyframes Always {
      100% { transform: scale(1.15);}
  }


`;

const ButtonSpacerContainer = styled.div`
@media only screen and (max-width: 1024px) {
  ;
}
`;

const Header = ({ siteTitle }) => (
  <Background>
  <ParticleContainer>
  <Particles
    height="100vh"
    width="100vw"
    params={{
      particles: {
        number: {
          value: 400,
        },
        size: {
          value: 3,
          random: true,
          anim: {
            speed: 5,
            size_min: 0.3
          }
        },
        line_linked: {
          enable: false
        },
        move: {
          random: true,
          speed: 1,
          direction: "right",
          out_mode: "out"
        }
      },
    }}
  /></ParticleContainer>
    <Container><Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`
      }}
    >
      {" "}
      <Logo src="/logo.png" />
    </Link></Container>
    <Tagline> The Premier Virtual High School Hackathon </Tagline>
    <SubTagline>Learn to build & pitch a product with workshops and thousands in prizes.</SubTagline>
    <br></br>
      <Date>October 9-11, 2020</Date>
    <Container>
      <a href="https://makespp.typeform.com/to/ZzGcLGKb" target="_blank" rel="noreferrer">
      <Register> Register </Register>
      </a>
    </Container>
      <ButtonSpacerContainer><br></br></ButtonSpacerContainer>
    {/* <Link to="/live">
      <Register> MakeSPP Live </Register>
    </Link> */}
  </Background>
);

export default Header;
