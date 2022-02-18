import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Action5 } from "../Actions";

export class TASK1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      second: "",
      operator: "",
    };
  }

  render() {
    this.ONCLICK = () => {
      if (this.state.first && this.state.second && this.state.operator) {
        let Data = {
          first: this.state.first,
          second: this.state.second,
          operator: this.state.operator,
        };
        this.props.Action5(Data);
      } else {
      }
    };
    return (
      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          onChange={(e) =>
            this.setState({
              first: parseInt(e.target.value),
            })
          }
          name="first"
        />
        <br />
        <label>{this.state.operator}</label>
        <br />
        <input
          type="text"
          onChange={(e) =>
            this.setState({
              second: parseInt(e.target.value),
            })
          }
          name="second"
        />
        <br />
        <button
          name="operator"
          value="+"
          onClick={(e) => {
            this.setState({
              operator: e.target.value,
            });
          }}
        >
          +
        </button>
        <button
          name="operator"
          value="-"
          onClick={(e) => {
            this.setState({
              operator: e.target.value,
            });
          }}
        >
          -
        </button>
        <button
          name="operator"
          value="/"
          onClick={(e) => {
            this.setState({
              operator: e.target.value,
            });
          }}
        >
          /
        </button>
        <button
          name="operator"
          value="*"
          onClick={(e) => {
            this.setState({
              operator: e.target.value,
            });
          }}
        >
          *
        </button>
        <button onClick={() => this.ONCLICK()}>Result</button>
        <br />
        <h2>Result is : {this.props.result}</h2>
      </div>
    );
  }
}
const DISPATCH = (dispatch) => {
  return bindActionCreators({ Action5 }, dispatch);
};
const STATE = (state) => {
  console.log("state", state);
  return {
    result: state.Reducer5.result,
  };
};
const CONNECT = connect(STATE, DISPATCH)(TASK1);
export default CONNECT;
