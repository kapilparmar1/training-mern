import React from "react";
import { Link } from "react-router-dom";

export default class Userlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1>Feb1 - Please wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <h1>List of Users </h1>
        <center>
          <table border="1" cellPadding="5" cellSpacing="5">
            <thead>
              <tr>
                <th>ID</th>
                <th>FirstName</th>
              </tr>
            </thead>
            <tbody>
              {items["data"].map((element) => (
                <tr key={element.id}>
                  <td>{element.id}</td>
                  <td>
                    <Link to={`/profilepic/${element.id}`}>
                      {element.first_name}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </center>
      </div>
    );
  }
}
