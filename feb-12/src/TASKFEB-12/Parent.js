import React, { Component } from "react";
import MyContext from "./Context";
import Child from "./Child";
import "./Parent.css";

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: "",
      submit: false,
    };
  }
  componentDidMount() {}
  Call = (e) => {
    e.preventDefault();
    this.setState({ submit: true });
  };
  ONCHANGE = (e) => {
    this.setState({ Data: e.target.value });
  };
  render() {
    return (
      <div className="Main">
        <div style={{ textAlign: "center" }}>
          <br />
          <h1>TO-DO LIST </h1>
          <form onSubmit={(e) => this.Call(e)}>
            <input
              style={{
                height: "30px",
                width: "17.8%",
                fontSize: "17px",
                paddingLeft: "5px",
                border: "2px solid black",
              }}
              type="text"
              placeholder="Add to the List..."
              onChange={(e) => this.ONCHANGE(e)}
            />
            <br />
          </form>

          <MyContext.Provider value={this.state.Data}>
            <Child submit={this.state.submit} />
          </MyContext.Provider>
        </div>
      </div>
    );
  }
}
