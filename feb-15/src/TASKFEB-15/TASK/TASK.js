import React, { Component } from "react";
import store from "../Store";
import userAction from "../Action";
import ShowList from "./ShowList";

export default class TASK extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DATA: {
        FName: "",
        LName: "",
        Gender: "",
        Age: "",
        Qualification: "",
        isEligible: "",
        Organization: "",
      },
      Clicked: false,
    };
  }

  componentDidMount() {
    store.subscribe(() => console.log("SUBS : ", store.getState()));
  }
  ONCHANGE = (Ename, Evalue) => {
    this.setState({
      DATA: {
        ...this.state.DATA,
        [Ename]: Evalue,
      },
    });
  };

  ONSUBMIT = (e) => {
    e.preventDefault();
    store.dispatch(userAction(this.state.DATA));
    this.setState({
      Clicked: true,
    });
  };
  render() {
    return (
      <>
        <h1 style={{ textAlign: "center" }}> USERFORM</h1>
        <form style={{ textAlign: "center" }}>
          <input
            type="text"
            placeholder="First Name"
            name="FName"
            required
            onChange={(e) => {
              this.ONCHANGE(e.target.name, e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            name="LName"
            required
            onChange={(e) => {
              this.ONCHANGE(e.target.name, e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Gender"
            name="Gender"
            required
            onChange={(e) => {
              this.ONCHANGE(e.target.name, e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Age"
            name="Age"
            required
            onChange={(e) => {
              this.ONCHANGE(e.target.name, e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Qualification"
            name="Qualifi
            requiredcation"
            onChange={(e) => {
              this.ONCHANGE(e.target.name, e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Organization"
            name="Organiz
            requiredation"
            onChange={(e) => {
              this.ONCHANGE(e.target.name, e.target.value);
            }}
          />
          <br />
          <label>isEligible ?</label>
          <input
            type="radio"
            name="isEligible"
            value="Yes"
            onChange={(e) => {
              this.ONCHANGE(e.target.name, e.target.value);
            }}
          />
          <label>Yes</label>
          <input
            type="radio"
            name="isEligible"
            value="No"
            onChange={(e) => {
              this.ONCHANGE(e.target.name, e.target.value);
            }}
          />
          <label>No</label>
          <br />

          <button onClick={(e) => this.ONSUBMIT(e)}>Submit</button>
        </form>

        {this.state.Clicked ? <ShowList /> : ""}
      </>
    );
  }
}
