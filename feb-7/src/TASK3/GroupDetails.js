import React, { Component } from "react";

export default class GroupDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: {
        ID: "",
        GName: "",
        GDetails: "",
        GDate: "",
        Members: "",
      },
      ONCLICK: false,
      storedData: [],
    };
  }

  componentDidMount() {
    let data = JSON.parse(localStorage.getItem("GROUP_DATA"));
    if (data) {
      let Length = data.length;
      this.setState({
        Data: {
          ...this.state.Data,
          ID: Length,
        },
      });

      this.setState({
        storedData: JSON.parse(localStorage.getItem("GROUP_DATA")),
      });
    } else {
      this.setState({
        Data: {
          ...this.state.Data,
          ID: 0,
        },
      });
    }
  }
  HandleInputChange = (Ename, Evalue) => {
    // if (JSON.parse(localStorage.getItem("GROUP_DATA")) === null) {
    //   this.setState(
    //     {
    //       Data: {
    //         ...this.state.Data,
    //         ID: 0,
    //       },
    //     },
    //     () => console.log(this.state.Data.ID)
    //   );
    // }

    this.setState({
      Data: {
        ...this.state.Data,
        [Ename]: Evalue,
      },
    });
  };
  Storeinfo = (e) => {
    e.preventDefault();
    if (this.state.ONCLICK) {
      let Edit = JSON.parse(localStorage.getItem("GROUP_DATA"));
      this.setState({
        Data: {
          ...this.state.Data,
          ID: this.state.Data.ID,
        },
      });
      Edit[this.state.Data.ID] = this.state.Data;
      localStorage.setItem("GROUP_DATA", JSON.stringify(Edit));

      this.setState({ ONCLICK: false });
    } else {
      if (JSON.parse(localStorage.getItem("GROUP_DATA")) === null) {
        // this.setState({
        //   Data: {
        //     ...this.state.Data,
        //     ID: 0,
        //   },
        // });
        let data = [];
        data.push(this.state.Data);
        localStorage.setItem("GROUP_DATA", JSON.stringify(data));
      } else {
        let storedData = JSON.parse(localStorage.getItem("GROUP_DATA"));
        // let Length = storedData.length;
        // this.setState({
        //   Data: {
        //     ...this.state.Data,
        //     ID: Length,
        //   },
        // });
        storedData.push(this.state.Data);
        localStorage.setItem("GROUP_DATA", JSON.stringify(storedData));
      }
      this.setState({
        storedData: JSON.parse(localStorage.getItem("GROUP_DATA")),
      });
    }
    window.location.reload();
  };

  render() {
    return (
      <>
        <div style={{ marginLeft: "20px" }}>
          <form type="submit">
            <table style={{ border: "1px solid pink", textAlign: "center" }}>
              {this.state.ONCLICK ? (
                <tr>
                  <td>
                    <input
                      type="text"
                      name="ID"
                      placeholder={` ID : ${this.state.Data.ID}`}
                      readOnly
                    />
                  </td>
                </tr>
              ) : (
                ""
              )}
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Group Name"
                    name="GName"
                    onChange={(e) =>
                      this.HandleInputChange(e.target.name, e.target.value)
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Group Details"
                    name="GDetails"
                    onChange={(e) =>
                      this.HandleInputChange(e.target.name, e.target.value)
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    style={{ width: "97%" }}
                    type="date"
                    placeholder="Group Created Date"
                    name="GDate"
                    onChange={(e) =>
                      this.HandleInputChange(e.target.name, e.target.value)
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="number"
                    placeholder="Members Allowed"
                    name="Members"
                    onChange={(e) =>
                      this.HandleInputChange(e.target.name, e.target.value)
                    }
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <button onClick={(e) => this.Storeinfo(e)}>
                    {this.state.ONCLICK ? "Edit" : "Store"}
                  </button>
                </td>
              </tr>
            </table>
          </form>
        </div>
        <div>
          {this.state.storedData ? (
            <h3 style={{ textAlign: "center" }}>List Of All Group Data</h3>
          ) : (
            ""
          )}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            {this.state.storedData !== []
              ? this.state.storedData.map((data, index) => (
                  <div style={{ display: "flex" }}>
                    <div>
                      <table
                        style={{ border: "1px solid black", margin: "10px" }}
                      >
                        <td
                          style={{ border: "1px solid black", padding: "6px" }}
                        >
                          ID
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "6px" }}
                        >
                          GName
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "6px" }}
                        >
                          GDetails
                        </td>
                        <td
                          style={{
                            border: "1px solid black",
                            padding: "6px",
                            textAlign: "center",
                          }}
                        >
                          GDate
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "6px" }}
                        >
                          Members
                        </td>

                        <tr>
                          <td
                            style={{
                              border: "1px solid black",
                              padding: "6px",
                            }}
                          >
                            {index}
                          </td>
                          <td
                            style={{
                              border: "1px solid black",
                              padding: "6px",
                            }}
                            key={data}
                          >
                            {data.GName}
                          </td>

                          <td
                            style={{
                              border: "1px solid black",
                              padding: "6px",
                            }}
                          >
                            {data.GDetails}
                          </td>

                          <td
                            style={{
                              border: "1px solid black",
                              padding: "6px",
                            }}
                          >
                            {data.GDate}
                          </td>
                          <td
                            style={{
                              border: "1px solid black",
                              padding: "6px",
                              textAlign: "center",
                            }}
                          >
                            {data.Members}
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div style={{ marginTop: "35px", width: "100%" }}>
                      <button
                        onClick={() =>
                          this.setState({ ID: index, ONCLICK: true })
                        }
                        style={{ width: "100%" }}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </>
    );
  }
}
