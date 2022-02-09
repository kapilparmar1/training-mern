import React, { Component } from "react";

export default class DeleteUser extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  DeleteUser = async () => {
    try {
      this.res = await fetch(`https://reqres.in/api/users/${this.props.ID}`, {
        method: "DELETE",
      });
      // this.response = await this.res;
      if (this.res.status === 204) {
        alert("Deleted Successfully");
        console.log(this.res);
      } else {
        console.log(this.res.json());
        // alert("Error");
      }
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return <div></div>;
  }
}
