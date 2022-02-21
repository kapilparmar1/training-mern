import axios from "axios";
import React, { Component } from "react";

import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { bindActionCreators } from "redux";
import getCall from "../Redux/action/getAction";

export class TASK1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Search: "",
      CLICKED: false,
      modifiedList: [],
    };
  }
  componentDidMount() {
    this.props.getIt();
  }
  DELETE = async (id) => {
    let res = await axios.delete(`https://retoolapi.dev/BUCPSc/posts/${id}`);
    if (res.status === 200) {
      window.location.reload();
    } else {
      alert("Could Not Delete");
    }
  };
  render() {
    const { data } = this.props;
    console.log("DATA", data);

    this.CallModified = () => {
      const modifiedList = data.filter((eachPost) => {
        if (eachPost?.title?.includes(this.state.Search)) {
          return eachPost;
        }
      });

      this.setState({ modifiedList: modifiedList });
    };

    return (
      <>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <input
            type="text"
            placeholder="Search by Title"
            onChange={(e) =>
              this.setState({ Search: e.target.value }, () => {
                if (this.state.Search !== "") {
                  this.setState({ CLICKED: true });
                  this.CallModified();
                } else {
                  this.setState({ CLICKED: false });
                }
              })
            }
          />
        </div>
        {!this.state.CLICKED ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <table style={{ textAlign: "center" }}>
              <thead>
                <tr>
                  <th
                    style={{
                      border: "1px solid black",
                      paddingLeft: "50px",
                      paddingRight: "50px",
                    }}
                  >
                    ID
                  </th>
                  <th
                    style={{
                      border: "1px solid black",
                      paddingLeft: "50px",
                      paddingRight: "50px",
                    }}
                  >
                    Title
                  </th>
                  <th
                    style={{
                      border: "1px solid black",
                      paddingLeft: "30px",
                      paddingRight: "30px",
                    }}
                  >
                    Manipulate
                  </th>
                </tr>
              </thead>
              {!data
                ? "Please Wait for Sometime..."
                : data.map((data, index) => (
                    <tbody key={index}>
                      <tr>
                        <td style={{ border: "1px solid black" }}>{data.id}</td>
                        <td style={{ border: "1px solid black" }}>
                          {data.title}
                        </td>
                        <button style={{ marginLeft: "4px" }}>
                          {" "}
                          <NavLink
                            to={`/edit?id=${data.id}&body=${
                              data.body ? data.body : "No Body"
                            }&title=${data.title ? data.title : "No Title"}`}
                            style={{
                              color: "black",
                              textDecorationLine: "none",
                            }}
                          >
                            Edit
                          </NavLink>
                        </button>
                        <button
                          style={{ marginLeft: "5px" }}
                          onClick={() => this.DELETE(data.id)}
                        >
                          Delete
                        </button>
                        <button style={{ marginLeft: "5px" }}>
                          <NavLink
                            to={`/show?body=${
                              data.body ? data.body : "No Body"
                            }`}
                            style={{
                              color: "black",
                              textDecorationLine: "none",
                            }}
                          >
                            Show
                          </NavLink>
                        </button>
                      </tr>
                    </tbody>
                  ))}
            </table>
          </div>
        ) : (
          <div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Body</th>
                  <th>Title</th>
                </tr>
              </thead>
              {this.state.modifiedList.map((element, index) => {
                return (
                  <tbody key={index}>
                    <tr>
                      <td
                        style={{
                          border: "1px solid black",
                          textAlign: "center",
                          width: "10%",
                        }}
                      >
                        {element.id}
                      </td>
                      <td
                        style={{
                          border: "1px solid black",
                          textAlign: "center",
                          width: "10%",
                        }}
                      >
                        {element.body}
                      </td>
                      <td
                        style={{
                          border: "1px solid black",
                          textAlign: "center",
                          width: "10%",
                        }}
                      >
                        {element.title}
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        )}
      </>
    );
  }
}

const getIt = () => getCall();
const DISPATCH = (dispatch) => {
  return bindActionCreators({ getIt }, dispatch);
};

const STATE = (state) => {
  console.log("CAhnage ", state);
  return {
    data: state.ReducerForGet.Data,
  };
};
const CONNECT = connect(STATE, DISPATCH)(TASK1);
export default CONNECT;
