import React, { Component } from "react";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.count = 0;
    this.state = {
      userData: [],
      isDataLoaded: false,
      IndividualData: {},
    };
  }
  componentDidMount() {
    this.FetchData();
  }
  FetchData = async () => {
    this.res = await fetch("https://reqres.in/api/users");
    this.response = await this.res.json();
    this.setState({ userData: this.response.data }, () => this.props.again());
  };
  SendData = () => {
    return this.state.userData;
  };
  render() {
    return (
      <>
        <div></div>
      </>
    );
  }
}

export default UserList;
