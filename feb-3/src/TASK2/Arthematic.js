import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default class Arthematic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Result: "",
      Operation: "",
    };

    this.myref1 = React.createRef();
    this.myref2 = React.createRef();
    this.Click = true;
  }
  componentDidMount() {}
  getData = () => {
    this.Input1 = parseInt(this.myref1.current.value);
    this.Input2 = parseInt(this.myref2.current.value);
    this.Click = false;

    this.setState({
      Result: eval(`${this.Input1}${this.state.Operation}${this.Input2}`),
    });
  };
  render() {
    return (
      <>
        <div style={{ marginLeft: "600px" }}>
          <Header />
        </div>
        <table
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <div style={{ display: "flex", border: "1px solid black" }}>
            <div>
              <tr>
                <td>
                  {" "}
                  <input type="text" placeholder="Input1" ref={this.myref1} />
                </td>
              </tr>
              <tr>
                <td>{this.state.Operation}</td>
              </tr>
              <tr>
                <td>
                  <input type="text" placeholder="Input2" ref={this.myref2} />
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    style={{ width: "100%" }}
                    onClick={() => this.getData()}
                  >
                    Result
                  </button>
                </td>
              </tr>
            </div>
            <div>
              <tr style={{ display: "flex", flexDirection: "column" }}>
                <td>
                  <button
                    style={{ width: "100%" }}
                    onClick={() => this.setState({ Operation: "+" })}
                  >
                    Addition
                  </button>
                </td>
                <td>
                  <button
                    style={{ width: "100%" }}
                    onClick={() => this.setState({ Operation: "-" })}
                  >
                    Subtraction
                  </button>
                </td>
                <td>
                  <button
                    style={{ width: "100%" }}
                    onClick={() => this.setState({ Operation: "/" })}
                  >
                    Division
                  </button>
                </td>
                <td>
                  <button
                    style={{ width: "100%" }}
                    onClick={() => this.setState({ Operation: "*" })}
                  >
                    Multiplication
                  </button>
                </td>
              </tr>
            </div>
          </div>
        </table>
        <div style={{ textAlign: "center" }}>
          {!this.Click ? (
            <h2>
              {!this.Click ? "  Result is : " : ""}

              {this.state.Operation == ""
                ? "Please select the Operation"
                : this.state.Result}
            </h2>
          ) : (
            ""
          )}
        </div>
        <div style={{ textAlign: "center" }}>
          <h2>
            <Footer />
          </h2>
        </div>
      </>
    );
  }
}
