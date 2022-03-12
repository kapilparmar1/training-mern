import React, { Component } from "react";
import axios from "axios";

export default class TASK extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      itemName: "",
      data: [],
    };
  }

  ADD = async (e) => {
    e.preventDefault();
    let DATA = {
      id: this.state.id,
      itemName: this.state.itemName,
    };

    let res = await axios.post("http://localhost:4000/items", { ...DATA });
    if (res.status === 201) return this.setState({ data: res.data });
  };
  DELETE = async (e) => {
    e.preventDefault();
    let res = await axios.delete(
      `http://localhost:4000/items/${this.state.id}`
    );

    let response = await axios(`http://localhost:4000/items`);
    this.setState({ data: response.data });

    console.log("RES is : ", res);
  };
  MODIFY = async (e) => {
    e.preventDefault();

    let DATA = {
      itemName: this.state.itemName,
    };

    let res = await axios.patch(
      `http://localhost:4000/items/${this.state.id}`,
      { ...DATA }
    );
    if (res.status === 201) return this.setState({ data: res.data });
  };
  SHOW = async (e) => {
    e.preventDefault();
    let res = await axios(`http://localhost:4000/items`);
    this.setState({ data: res.data });
  };
  render() {
    return (
      <>
        <div className="App">
          <form>
            <input
              type="number"
              name="id"
              placeholder="ID"
              onChange={(e) => this.setState({ id: e.target.value })}
            />
            <br />
            <input
              type="text"
              name="itemName"
              placeholder="Item Name"
              onChange={(e) => this.setState({ itemName: e.target.value })}
            />
            <br />
            <button onClick={(e) => this.ADD(e)}>Add</button>
            <button onClick={(e) => this.SHOW(e)}>Show</button>
            <button onClick={(e) => this.DELETE(e)}>Delete</button>
            <button onClick={(e) => this.MODIFY(e)}>Modify</button>
          </form>
        </div>

        <div>
          <h1>List is ...</h1>
          <br />
          <table>
            {this.state.data?.map((data) => (
              <body>
                <tr>
                  <td>ID : {data.id}</td>
                  <td>Name : {data.itemName}</td>
                </tr>
              </body>
            ))}
          </table>
        </div>
      </>
    );
  }
}
