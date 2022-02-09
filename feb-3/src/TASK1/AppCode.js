import React from "react";
import UserList from "./userList";

import UserInfo from "./userInfo";

class App1 extends React.Component {
  constructor(props) {
    super(props);
    this.myref = React.createRef();
    this.myRef = React.createRef();
    this.state = {
      UserData: [],
      OnclickImage: false,
      ID: "",
      checkState: true,
    };
  }
  componentDidMount() {
    // this.DATA.then((data) => this.setState({ IndividualData: data }));
    // });
  }
  RecieveData = () => {
    console.log("Before", this.state.UserData);
    this.setState({ UserData: this.myref.current.SendData() }, () =>
      console.log("After", this.state.UserData)
    );
  };
  CheckState = () => {
    this.setState({ checkState: this.myRef.current.SendData() });
    if (this.state.checkState) {
      this.setState({ OnclickImage: false });
    }
  };

  render() {
    const { UserData } = this.state;
    console.log(UserData);

    return (
      <>
        {!this.state.OnclickImage ? (
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <table>
                <thead>
                  <h1>USER LIST</h1>
                </thead>
              </table>
            </div>
            <div className="main-div">
              <div
                className="all-detail"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                {UserData.map((data) => (
                  <div style={{ width: "fit-content", padding: "10px" }}>
                    <p style={{ textAlign: "center" }}>{data.first_name}</p>
                    <p style={{ textAlign: "center" }}>{data.email}</p>
                    <img
                      src={data.avatar}
                      alt=""
                      onClick={() =>
                        this.setState({ OnclickImage: true, ID: data.id })
                      }
                      style={{ marginLeft: "15px", cursor: "pointer" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <UserList ref={this.myref} again={() => this.RecieveData()} />
        <UserInfo
          UserData={this.state.UserData}
          OnclickImage={this.state.OnclickImage}
          ID={this.state.ID}
          ref={this.myRef}
          again={() => this.CheckState()}
        />
      </>
    );
  }
}

export default App1;
