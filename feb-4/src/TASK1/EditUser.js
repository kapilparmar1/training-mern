import React, { Component } from "react";

export default class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      FName: "",
      LName: "",
      Avatar: "",
    };
  }
  EditUser = async (e) => {
    e.preventDefault();
    if (
      this.state.Id == "" ||
      this.state.Email == "" ||
      this.state.FName == "" ||
      this.state.LName == ""
    ) {
      console.log("Empty");
      return;
    } else {
      try {
        this.res = await fetch(`https://reqres.in/api/users/${this.props.ID}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify({
            email: this.state.Email,
            first_name: this.state.FName,
            last_name: this.state.LName,
            avatar: this.state.Avatar,
          }),
        });
        this.response = await this.res.json();
        if (this.res.status === 200) {
          alert("Successfull");
          console.log(this.response);
          this.props.ToggleState(false);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  handleInputs = (Ename, Evalue) => {
    this.setState({ [Ename]: Evalue });
  };
  render() {
    const { ONCLICK } = this.props;
    return (
      <>
        {ONCLICK ? (
          <div style={{ margin: "20px" }}>
            <form method="PATCH" type="Submit">
              <table style={{ border: "1px solid black", padding: "2px" }}>
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
                    <button onClick={(e) => this.EditUser(e)}>Edit User</button>
                  </td>
                </tr>
              </table>
            </form>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}
