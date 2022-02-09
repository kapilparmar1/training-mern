import React, { Component } from "react";

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ONCLICK: false,
    };
  }

  componentDidMount() {}
  SendData = () => {
    return this.state.ONCLICK;
  };
  render() {
    const { UserData, OnclickImage, ID, again } = this.props;
    // this.setState({ ONCLICK: OnclickImage });
    return (
      <div style={{ marginTop: "150px" }}>
        {UserData.map((data) => (
          <div style={{ display: "flex", justifyContent: "center" }}>
            {OnclickImage && data.id == ID ? (
              <table style={{ border: "1px solid black" }}>
                <tr>
                  <th style={{ border: "1px solid black" }}>ID</th>
                  <th style={{ border: "1px solid black" }}>Email</th>
                  <th style={{ border: "1px solid black" }}>First-Name</th>
                  <th style={{ border: "1px solid black" }}>Last-Name</th>
                  <th style={{ border: "1px solid black" }}>Avatar</th>
                </tr>
                <tbody>
                  <tr>
                    <td
                      style={{
                        border: "1px solid black",
                        width: "fit-content",
                      }}
                    >
                      {data.id}
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        width: "fit-content",
                      }}
                    >
                      {data.email}
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        width: "fit-content",
                      }}
                    >
                      {data.first_name}
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        width: "fit-content",
                      }}
                    >
                      {data.last_name}
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        width: "fit-content",
                      }}
                    >
                      <img
                        src={data.avatar}
                        alt="Image"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          this.setState({ ONCLICK: true }, () => again());
                        }}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    );
  }
}
