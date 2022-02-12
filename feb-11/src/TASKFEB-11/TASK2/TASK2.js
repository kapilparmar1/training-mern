import React, { Component } from "react";

export default class TASK2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Image: " ",
      isPresent: false,
    };
  }
  componentDidMount() {
    if (JSON.parse(localStorage.getItem("IMAGE"))) {
      this.setState({ isPresent: true });
    }
  }
  Call = () => {
    let file = this.state.Image;

    console.log("File  : ", file);
    const reader = new FileReader();
    reader.readAsDataURL(file[0]);

    reader.onload = () => {
      localStorage.setItem("IMAGE", JSON.stringify(reader.result));
    };
    window.location.reload();
  };

  render() {
    return (
      <>
        <div>
          <input
            type="file"
            onChange={(e) => this.setState({ Image: e.target.files })}
          />
          <br />
          <button onClick={() => this.Call()}>Call</button>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          {this.state.isPresent ? (
            <img
              src={JSON.parse(localStorage.getItem("IMAGE"))}
              alt=""
              width={200}
              height={200}
            />
          ) : (
            "Not Present"
          )}
        </div>
      </>
    );
  }
}
