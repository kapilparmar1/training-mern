import React, { Component } from "react";

export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: {
        FirstName: "",
        LastName: "",
        Email: "",
        PhoneNumber: "",
        Password: "",
        Image: "",
      },
      storedData: [],
    };
  }

  componentDidMount() {
    let data = JSON.parse(localStorage.getItem("All_DATA"));
    if (data)
      this.setState({
        storedData: JSON.parse(localStorage.getItem("All_DATA")),
      });
  }
  HandleInputChange = (Ename, Evalue) => {
    this.setState({
      Data: {
        ...this.state.Data,
        [Ename]: Evalue,
      },
    });
  };

  Storeinfo = (e) => {
    e.preventDefault();

    this.setState({
      Data: {
        ...this.state.Data,
        Image: this.state.Image,
      },
    });
    if (JSON.parse(localStorage.getItem("All_DATA")) === null) {
      let data = [];
      data.push(this.state.Data);
      localStorage.setItem("All_DATA", JSON.stringify(data));
    } else {
      let storedData = JSON.parse(localStorage.getItem("All_DATA"));
      storedData.push(this.state.Data);
      localStorage.setItem("All_DATA", JSON.stringify(storedData));
    }
    this.setState({ storedData: JSON.parse(localStorage.getItem("All_DATA")) });
  };

  getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  imageUpload = (e) => {
    const file = e.target.files[0];
    this.getBase64(file).then((base64) => {
      this.setState({
        Data: {
          ...this.state.Data,
          Image: base64,
        },
      });
    });
  };

  render() {
    return (
      <>
        <div style={{ marginLeft: "20px" }}>
          <form type="submit">
            <table style={{ border: "1px solid pink", textAlign: "center" }}>
              <tr>
                <td>
                  <input
                    width="100%"
                    type="text"
                    name="FirstName"
                    placeholder="FirstName"
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
                    name="LastName"
                    placeholder="LastName"
                    onChange={(e) =>
                      this.HandleInputChange(e.target.name, e.target.value)
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email"
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
                    name="PhoneNumber"
                    placeholder="PhoneNumber"
                    onChange={(e) =>
                      this.HandleInputChange(e.target.name, e.target.value)
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="password"
                    name="Password"
                    placeholder="Password"
                    onChange={(e) =>
                      this.HandleInputChange(e.target.name, e.target.value)
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="file"
                    accept=".jpeg,.png,.jpg"
                    name="ProfileImage"
                    placeholder="ProfileImage"
                    onChange={(e) => this.imageUpload(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={(e) => this.Storeinfo(e)}>Store</button>
                </td>
              </tr>
            </table>
          </form>
        </div>

        <h3 style={{ textAlign: "center" }}>List Of All the Data</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* <div></div> */}

          <div>
            {this.state.storedData !== []
              ? this.state.storedData.map((data) => (
                  <table style={{ border: "1px solid black", margin: "10px" }}>
                    <td style={{ border: "1px solid black", padding: "6px" }}>
                      FirstName
                    </td>
                    <td style={{ border: "1px solid black", padding: "6px" }}>
                      LastName
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        padding: "6px",
                        textAlign: "center",
                      }}
                    >
                      Email
                    </td>
                    <td style={{ border: "1px solid black", padding: "6px" }}>
                      PhoneNumber
                    </td>
                    <td style={{ border: "1px solid black", padding: "6px" }}>
                      Password
                    </td>
                    <td style={{ border: "1px solid black", padding: "6px" }}>
                      ProfileImage
                    </td>

                    <tr>
                      <td
                        style={{ border: "1px solid black", padding: "6px" }}
                        key={data}
                      >
                        {data.FirstName}
                      </td>

                      <td style={{ border: "1px solid black", padding: "6px" }}>
                        {data.LastName}
                      </td>

                      <td style={{ border: "1px solid black", padding: "6px" }}>
                        {data.Email}
                      </td>
                      <td style={{ border: "1px solid black", padding: "6px" }}>
                        {data.PhoneNumber}
                      </td>

                      <td style={{ border: "1px solid black", padding: "6px" }}>
                        {data.Password}
                      </td>

                      <td
                        style={{
                          border: "1px solid black",
                          padding: "6px",
                          textAlign: "center",
                        }}
                      >
                        <img src={data.Image} alt="" width={80} height={80} />
                      </td>
                    </tr>
                  </table>
                ))
              : ""}
          </div>
        </div>
      </>
    );
  }
}
