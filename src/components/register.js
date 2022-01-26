import React, { Component } from 'react';
import { navigate } from "gatsby";
import { Link } from "gatsby";
import { Logo, Wrapper1, RegisterButton, Input, Select, Label, SubLabel, Textarea} from './styles';
import { Row, Col } from "react-grid-system";
import GatsbyLink from 'gatsby-link';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

class Join extends Component {
  
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
      shirt: "",
      online: "",
      time: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(this.state);
    const data = new FormData(event.target);
    fetch(
      "https://script.google.com/macros/s/AKfycbyOWWQ2c2otCdwYTTP2axCLTTkBrPES9LSWzko9XCxXSvYlCdCo-o3yqs7tKW3yxGy_eg/exec",
      { method: "POST", body: data }
    )
      .then(response => console.log("success!", response))
      .catch(error => console.error("error!", error.message));
    event.preventDefault();
    navigate("/submitted");
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <br/><br/><br/>
          <Wrapper1>
          <Link to="/"><Logo src="/logo.svg"/></Link>
          <Row>
            <Col>
              <Input
                type="text"
                name="name"
                placeholder="Full Name"
                value={this.state.name}
                required
                onChange={event =>
                  this.setState(
                    updateByPropertyName("name", event.target.value)
                  )
                }
              />
            </Col>
            <Col>
              <Input
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.email}
                required
                onChange={event =>
                  this.setState(
                    updateByPropertyName("email", event.target.value)
                  )
                }
              />
            </Col>
            <Col>
              <Input
                type="text"
                name="school"
                placeholder="School"
                value={this.state.school}
                required
                onChange={event =>
                  this.setState(
                    updateByPropertyName("school", event.target.value)
                  )
                }
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <br/>
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
                  Grade Level
                </option>
                <option>7th</option>
                <option>8th</option>
                <option>9th</option>
                <option>10th</option>
                <option>11th</option>
                <option>12th</option>
              </Select>
            </Col>
            <Col>
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
                <option>Female</option>
                <option>Male</option>
                <option>Nonbinary</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </Select>
            </Col>
            <Col>
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

                <option>Beginner (never attended a hackathon)</option>
                <option>Intermediate (familiar with hackathons)</option>
                <option>Expert (attended many hackathons)</option>
              </Select>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <Label>Why do you want to attend MakeSPP?</Label>
              <SubLabel>
                Share a few sentences on what you'd like to learn or
                build at MakeSPP.
              </SubLabel>
              <br />
              <Textarea
                name="why"
                type="text"
                placeholder=""
                value={this.state.why}
                required
                onChange={event =>
                  this.setState(updateByPropertyName("why", event.target.value))
                }
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <SubLabel>
                If you have a team, enter members here. Make sure
                they sign up too! If you don't have a team yet, don't worry,
                there will be a team formation session at the beginning of MakeSPP.
              </SubLabel>
              <br/>
              <Input
                type="text"
                name="team"
                placeholder="Team Members"
                value={this.state.team}
                onChange={event =>
                  this.setState(
                    updateByPropertyName("team", event.target.value)
                  )
                }
              />{" "}
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Input
                type="text"
                name="dietary"
                placeholder="Dietary Choices/Allergies"
                value={this.state.dietary}
                onChange={event =>
                  this.setState(
                    updateByPropertyName("dietary", event.target.value)
                  )
                }
              />{" "}
            </Col>
            <Col>
              <Select
                name="shirt"
                value={this.state.shirt}
                required
                onChange={event =>
                  this.setState(
                    updateByPropertyName("shirt", event.target.value)
                  )
                }
              >
                <option value="" disabled selected>
                  T-Shirt Size (Adult)
                </option>

                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </Select>
            </Col>

            <Col>
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
              />
            </Col>
          </Row>
          <br/>
            <RegisterButton type="submit">Submit</RegisterButton>
            </Wrapper1>
            <br/><br/>
        </form>
    );
  }
}

export default Join;
