import { navigate } from "gatsby";
import React, { Component } from "react";
import styled from "styled-components";
import Call from "./elements/call";
import { Row, Col } from "react-grid-system";

const Container = styled.div`
  padding: 30px;
  max-width: 50em;
  margin: 0 auto;
  text-align: center;
`;

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  border: 2px solid #e4e4e4;
  border-radius: 5px;
  width: 90%;
  margin: 10px;
  transition: all 300ms ease hover;

  &:focus {
    border: 2px solid #ca043f;
  }
`;

const Select = styled.select`
  font-size: 18px;
  padding: 10px;
  border: 2px solid #e4e4e4;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 5px;
  width: 100%;
  margin: 10px;
  transition: all 300ms ease hover;

  &:focus {
    border: 2px solid #ca043f;
  }
`;

const Submit = styled.button`
  font-size: 24px;
  padding: 10px;
  border: 3px solid #ca043f;
  background: #fff;
  width: 30%;
  margin: 20px;
  border-radius: 5px;
  transition: all 300ms ease;

  &:hover {
    border: 3px solid #ca043f;
    background: #ca043f;
    color: #e4e4e4;
    cursor: pointer;
  }
`;

const Label = styled.p`
  margin: 0 0 10px 0;
  padding: 0;
  font-size: 24px;
`;

const SubLabel = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
`;

const Textarea = styled.textarea`
  height: 100px;
  padding: 10px;
  border: 2px solid #e4e4e4;
  border-radius: 5px;
  transition: all 300ms ease hover;
  width: 90%;
  font-size: 18px;

  &:focus {
    border: 2px solid #ca043f;
  }
`;

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      school: "",
      year: "",
      gender: "",
      skill_level: "",
      why: "",
      team: "",
      dietary: "",
      entrepreneurship: "",
      shirt: "",
      online: "",
      time: ""
    };
    // are you beginner, intermediate, advanced
    // why do you want to attend MakeSPP?
    // anything to share -- website, github, etc?
    // Do you have a team?
    // Shirt size
    // agree to conduct?
    // dietary restrictions
    //time

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(this.state);
    const data = new FormData(event.target);
    fetch(
      "https://script.google.com/macros/s/AKfycbyP3jQM-nguCkmqbEmxJoIDtF_qiU_xESirUR105BzFT3Vprg/exec",
      { method: "POST", body: data }
    )
      .then(response => console.log("Success!", response))
      .catch(error => console.error("Error!", error.message));
    event.preventDefault();
    navigate("/submitted");
  }

  render() {
    return (
      <Container>
        <Call size="36px"> Apply </Call>
        <br />
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col sm={4}>
              <Input
                type="text"
                name="name"
                placeholder="Full Name"
                value={this.state.name}
                onChange={event =>
                  this.setState(
                    updateByPropertyName("name", event.target.value)
                  )
                }
              />
            </Col>
            <Col sm={4}>
              <Input
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={event =>
                  this.setState(
                    updateByPropertyName("email", event.target.value)
                  )
                }
              />{" "}
            </Col>
            <Col sm={4}>
              <Input
                type="text"
                name="school"
                placeholder="School"
                value={this.state.school}
                onChange={event =>
                  this.setState(
                    updateByPropertyName("school", event.target.value)
                  )
                }
              />
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <br />
              <Select
                name="year"
                value={this.state.year}
                onChange={event =>
                  this.setState(
                    updateByPropertyName("year", event.target.value)
                  )
                }
              >
                <option value="" disabled selected>
                  Class Year
                </option>
                <option>Middle School</option>
                <option>Freshman</option>
                <option>Sophomore</option>
                <option>Junior </option>
                <option>Senior</option>
              </Select>
            </Col>
            <Col sm={4}>
              <br />
              <Select
                name="gender"
                value={this.state.gender}
                onChange={event =>
                  this.setState(
                    updateByPropertyName("gender", event.target.value)
                  )
                }
              >
                <option value="" disabled selected>
                  Gender
                </option>

                <option>Male</option>
                <option>Female</option>
                <option>Non-Binary</option>
                <option>Prefer not to say</option>
              </Select>
            </Col>
            <Col sm={4}>
              <br />
              <Select
                name="skill_level"
                value={this.state.skill_level}
                onChange={event =>
                  this.setState(
                    updateByPropertyName("skill_level", event.target.value)
                  )
                }
              >
                <option value="" disabled selected>
                  Hackathon Experience
                </option>

                <option>Beginner (never attended a hackathon before)</option>
                <option>Intermediate (familiar with hackathons)</option>
                <option>Expert (frequent hackathon attendee)</option>
              </Select>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm={12}>
              <Label>Why do you want to attend MakeSPP?</Label>
              <SubLabel>
                Please share, in a couple sentences, what you'd like to learn or
                build at MakeSPP.
              </SubLabel>
              <br />
              <Textarea
                name="why"
                type="text"
                placeholder=""
                value={this.state.why}
                onChange={event =>
                  this.setState(updateByPropertyName("why", event.target.value))
                }
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm={2} />
            <Col sm={8}>
              <SubLabel>
                If you have a team, enter their names here. Make sure
                they sign up too! If you don't have a team yet, don't worry,
                there will be a team formation session.{" "}
              </SubLabel>
              <Input
                type="text"
                name="team"
                placeholder="Team members"
                value={this.state.team}
                onChange={event =>
                  this.setState(
                    updateByPropertyName("team", event.target.value)
                  )
                }
              />{" "}
            </Col>
            <Col sm={2} />
          </Row>
          <br />
          <Row>
            <Col sm={4} />

            <Col sm={4}>
              <SubLabel>
                Are you interested in attending the entrepreneurship panel
                (advice from CEOs/founders)?{" "}
              </SubLabel>
              <Select
                name="entrepreneurship"
                value={this.state.entrepreneurship}
                onChange={event =>
                  this.setState(
                    updateByPropertyName("entrepreneurship", event.target.value)
                  )
                }
              >
                <option value="" disabled selected>
                  Select option
                </option>

                <option>Yes</option>
                <option>No</option>
                <option>Maybe</option>
              </Select>
            </Col>
            <Col sm={4} />
          </Row>
          <Row>
            <Col sm={4}>
              <SubLabel>Any dietary restrictions?</SubLabel>
              <Input
                type="text"
                name="dietary"
                placeholder=""
                value={this.state.dietary}
                onChange={event =>
                  this.setState(
                    updateByPropertyName("dietary", event.target.value)
                  )
                }
              />{" "}
            </Col>
            <Col sm={4}>
              <SubLabel>T-Shirt size</SubLabel>
              <Select
                name="shirt"
                value={this.state.shirt}
                onChange={event =>
                  this.setState(
                    updateByPropertyName("shirt", event.target.value)
                  )
                }
              >
                <option value="" disabled selected>
                  Select Size (Adult)
                </option>

                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </Select>
            </Col>

            <Col sm={4}>
              <SubLabel>Anything to share?</SubLabel>
              <Input
                name="online"
                type="text"
                placeholder="Website, GitHub, Devpost..."
                value={this.state.online}
                onChange={event =>
                  this.setState(
                    updateByPropertyName("online", event.target.value)
                  )
                }
              />{" "}
            </Col>
          </Row>
          <br />
          <Submit type="submit">Apply </Submit>
        </form>
      </Container>
    );
  }
}

export default Register;
