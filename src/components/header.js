import { Link } from "gatsby";
import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";
import { Container} from "react-grid-system";

const Background = styled.header`
  margin: 0;
  padding: 0;
  color: #fff;
  min-height: 100vh;
  background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
`;

const ParticleContainer = styled.div`
  position: absolute;
`;

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-height: 200px;
  padding: 16px;
  @media only screen and (max-width: 767px) {
    display: none;
}
`;

const MobileLogo = styled.img`
  display: none;
  @media only screen and (max-width: 767px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-height: 200px;
    padding: 16px;
}
`;

const Description = styled.p`
  font-size: ${props => props.size};
  font-weight: 400;
  color: #FFFFFF;
  line-height: 2;
  position: relative;
  bottom: -10px;
  left: 0;
  right: 0;
`;

const Makey = styled.img`
  right: 0%;
  height: 320px;
  position: fixed;
  bottom: 0;
  @media only screen and (max-width: 767px) {
    height: 270px;
}
`;

const Img = styled.img`
  display:block;
  max-width:100px;
  min-width:60px;
  position:fixed;
  right:50px;
  top:0;
  width:7%;
  z-index:10000;
`;

const Tagline = styled.h1`
  text-align: center;
  max-width: 900px;
  font-size: 3rem;
  padding: 16px;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  @media only screen and (max-width: 767px) {
      font-size: 2rem;
    }
`;

const SubTagline = styled.h1`
  text-align: center;
  max-width: 600px;
  padding: 12px;
  font-size: 24px;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  @media only screen and (max-width: 767px) {
      font-size: 1.3rem;
    }
`;

const Date = styled.h1`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 2.7rem;
  @media only screen and (max-width: 767px) {
      font-size: 2rem;
      margin: 0;
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
      100% { transform: scale(1.05);}
  }


`;


const RegisterContainer = styled.div`
  padding-bottom: 48px;
`



const Header = ({ siteTitle }) => (
  <Background>
  {/*<a id="mlh-trust-badge"
  href="https://mlh.io/seasons/2021/events"
  target="_blank" rel="noreferrer">
  <Img src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-black.svg" alt="Major League Hacking 2021 Hackathon Season"></Img></a>
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
  /></ParticleContainer>*/}<br/><br/>
    <Container><Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`
      }}
    >
      {" "}
      <Logo src="/logo.svg" /><MobileLogo src="/logosmall.svg" />
    </Link></Container>
    <Tagline> The Premier Virtual <br/>High School Hackathon </Tagline>
    <SubTagline>Learn to build & pitch a product with workshops and thousands in prizes.</SubTagline>
    <br></br>
      <Date>Fall 2021</Date>
      <Makey src="/makey.png"/>
    {/*<RegisterContainer>
      <a href="https://makespp.typeform.com/to/ZzGcLGKb" target="_blank" rel="noreferrer">
      <Register> Register </Register>
      </a>
    </RegisterContainer>
    <RegisterContainer>
      <a href="/live" target="_blank" rel="noreferrer">
      <Register> Live </Register>
      </a>
    </RegisterContainer>*/}<br/><br/><br/><br/><br/>
    <Description color="#333" className="center" size="16px">
      © 2021<a href="https://spprep.org"> St. Peter's Prep High School</a><br/>
      <a href="http://2018.makespp.com">
        <b>2018</b>
      </a>&nbsp; | &nbsp;
      <a href="https://2019.makespp.com">
       <b>2019</b>
      </a> &nbsp; | &nbsp;
      <a href="https://2020.makespp.com">
       <b>2020</b>
      </a>  &nbsp; | &nbsp;
      <a href="https://makespp.com">
       <b>2021</b>
      </a>
      </Description>
    <br/>
  </Background>
);

export default Header;
