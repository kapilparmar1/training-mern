import React, { Component } from "react";

export default class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: "",
      Email: "",
      FName: "",
      LName: "",
      Avatar: "",
    };
  }
  componentDidMount() {
    console.log("Mounted");
  }
  CreateUser = async (e) => {
    e.preventDefault();
    try {
      if (
        this.state.Id == "" ||
        this.state.Email == "" ||
        this.state.FName == "" ||
        this.state.LName == ""
      ) {
        console.log("Empty");
        return;
      } else {
        this.res = await fetch("https://reqres.in/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify({
            id: this.state.Id,
            email: this.state.Email,
            first_name: this.state.FName,
            last_name: this.state.LName,
            avatar: this.state.Avatar,
          }),
        });

        this.response = await this.res.json();
        if (this.res.status === 201) {
          alert("Created Successfully");
          console.log(this.response);
        } else if (this.res.status !== 201) {
          alert("Unsuccessfull");
          console.log(this.response);
        }
      }
    } catch (error) {
      alert("Error", error);
    }
  };
  handleInputs = (Ename, Evalue) => {
    this.setState({ [Ename]: Evalue });
  };
  componentDidUpdate(prevProps, prevState) {
    console.log("Changed", prevState);
  }

  render() {
    return (
      <div style={{ margin: "20px" }}>
        <form method="POST" type="Submit">
          <table style={{ border: "1px solid black", padding: "2px" }}>
            <tr>
              <td>
                <input
                  style={{
                    width: "95%",

                    borderRadius: "4px",
                  }}
                  type="text"
                  name="Id"
                  value={this.state.Id}
                  onChange={(e) =>
                    this.handleInputs(e.target.name, e.target.value)
                  }
                  placeholder="101"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  style={{ width: "95%", borderRadius: "4px" }}
                  type="email"
                  name="Email"
                  value={this.state.Email}
                  onChange={(e) =>
                    this.handleInputs(e.target.name, e.target.value)
                  }
                  placeholder="Email"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  style={{ width: "95%", borderRadius: "4px" }}
                  type="text"
                  name="FName"
                  value={this.state.FName}
                  onChange={(e) =>
                    this.handleInputs(e.target.name, e.target.value)
                  }
                  placeholder="First Name"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  style={{ width: "95%", borderRadius: "4px" }}
                  type="text"
                  name="LName"
                  value={this.state.LName}
                  onChange={(e) =>
                    this.handleInputs(e.target.name, e.target.value)
                  }
                  placeholder="Last Name"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  style={{ width: "95%", borderRadius: "4px" }}
                  type="text"
                  name="Avatar"
                  value={this.state.Avatar}
                  onChange={(e) =>
                    this.handleInputs(e.target.name, e.target.value)
                  }
                  placeholder="Avatar Link"
                />
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>
                <button onClick={(e) => this.CreateUser(e)}>Create New</button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}
