import React, { Component } from "react";
import TextArea from "@govuk-react/text-area";
import Button from "@govuk-react/button";
import { css } from "react-emotion";
import Header from "@govuk-react/header";

const submitButton = css`
  margin-top: 20pt;
`;

export class ReportScreen extends Component {
  constructor() {
    super();
    this.state = {
      whatHappened: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ whatHappened: event.target.value });
  }

  handleSubmit(event) {
    alert("What Happened: " + this.state.whatHappened);
    event.preventDefault();
  }

  render() {
    const input = {
      id: "what happened",
      onChange: this.handleChange,
      value: this.state.whatHappened
    };

    return (
      <div>
        <Header level={1}>Report a CyberCrime</Header>

        <form onSubmit={this.handleSubmit}>
          <TextArea name="group1" input={input}>
            What Happened?
          </TextArea>
          <Button className={submitButton} type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
