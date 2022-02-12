import React, { Component } from "react";

export default class TASK3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Image: "",
    };
  }
  componentDidMount() {
    this.StoreImage();
    this.setState({ Image: JSON.parse(localStorage.getItem("REMOTE_IMAGE")) });
  }
  StoreImage = () => {
    let Image =
      "https://freepngimg.com/thumb/avengers/117295-infinity-avengers-war-free-download-png-hd-thumb.png";
    localStorage.setItem("REMOTE_IMAGE", JSON.stringify(Image));
  };
  render() {
    return (
      <>
        {" "}
        <div style={{ textAlign: "center" }}>
          {this.state.Image ? (
            <img src={this.state.Image} alt="" />
          ) : (
            "Not Present"
          )}
        </div>
      </>
    );
  }
}
