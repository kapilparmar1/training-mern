import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Action4 } from "../Actions";

export class RouterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: "",
    };
  }

  componentDidMount() {
    this.FETCH();
  }
  FETCH = async () => {
    let res = await fetch("https://retoolapi.dev/BUCPSc/posts");
    let response = await res.json();
    if (res.status === 200) {
      this.setState(
        {
          List: response,
        },
        () => {
          console.log(this.state.List);
          this.props.Action4(this.state.List, null, null);
        }
      );
    } else {
      console.log("Could Not get the info");
    }
  };
  render() {
    return (
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <table style={{ border: "2px solid black" }}>
            <th>
              <tr>
                <td style={{ border: "1px solid black" }}>ID</td>
                <td style={{ border: "1px solid black" }}>Body</td>
                <td style={{ border: "1px solid black" }}>Title</td>
              </tr>
            </th>
          </table>
        </div>
        <div>
          {this.state.List
            ? this.state.List.map((data) => (
                <table>
                  <tr>
                    <td
                      style={{
                        border: "1px solid black",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        width: "fit-content",
                      }}
                    >
                      {data.id}
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        width: "fit-content",
                      }}
                    >
                      {data.body}
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        width: "fit-content",
                      }}
                    >
                      {data.title}
                    </td>
                  </tr>
                </table>
              ))
            : ""}
        </div>
      </div>
    );
  }
}

const DISPATCH = (dispatch) => {
  return bindActionCreators({ Action4 }, dispatch);
};
const STATE = (state) => {
  console.log(state);
  return {};
};

const CONNECT = connect(STATE, DISPATCH)(RouterComponent);
export default CONNECT;
