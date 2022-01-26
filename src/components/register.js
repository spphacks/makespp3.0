import React, { Component } from 'react';
import { navigate } from "gatsby";
import { Wrapper1, RegisterButton, Input, Select, Label, SubLabel, Textarea} from './styles';
import { Row, Col } from "react-grid-system";

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
      entrepreneurship: "",
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
                placeholder="name@example.com"
                value={this.state.email}
                required
                onChange={event =>
                  this.setState(
                    updateByPropertyName("email", event.target.value)
                  )
                }
              />
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
                <option>Non-binary</option>
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
                <option>Expert (attended many hackathons before)</option>
              </Select>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm={12}>
              <Label>Why do you want to attend MakeSPP?</Label>
              <SubLabel>
                Please share a couple sentences on what you'd like to learn or
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
                If you have a team, please enter their names here. Make sure
                they sign up too! If you don't have a team yet, don't worry,
                there will be a team formation session at the beginning of the
                event.{" "}
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



            <RegisterButton type="submit">Submit</RegisterButton>
            </Wrapper1>
        </form>
    );
  }
}

export default Join;
