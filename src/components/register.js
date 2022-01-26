import React, { Component } from 'react';
import { navigate } from "gatsby";
import { Wrap, RegisterButton, Input} from './styles';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

class Join extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      time: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(this.state);
    const data = new FormData(event.target);
    fetch(
      "https://script.google.com/macros/s/AKfycby79kV_9VQkk19PP9T6Oa7MwU7Wh1wVKfdvuWf0UD5KvDyJRB5O6ZwP_fDaUOi6S0bO7w/exec",
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
          <Wrap>
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
            <RegisterButton type="submit">submit</RegisterButton>
          </Wrap>
        </form>
    );
  }
}

export default Join;
