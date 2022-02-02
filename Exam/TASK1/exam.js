import react from "react";
import ROUTE from "./Route";

class STUDENT extends react.Component {
  Count = 0;
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false,
      Name: false,
      ID: "",
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("https://retoolapi.dev/o686nx/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    let styleElement = {
      margin: "auto",
      border: "1px solid black",
      borderCollapse: "collapse",
      padding: "5px",
    };
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );
    const SHOW = () => {
      //   let nm = prompt("Enter the name");

      console.log(this.state.Name);
    };

    return (
      <>
        {this.state.Name ? <ROUTE id={this.state.ID} /> : ""}
        <div className="App">
          <h1> Fetch data from an api in react </h1>{" "}
          <table>
            <thead>Student Table</thead>
            <th>
              <td>Id</td>
              <td>Name</td>
              {/* <td>Name</td>
            <td>Year</td>
            <td>Color</td>
            <td>Pantone_Value</td> */}
            </th>
          </table>
          {items.map((item) => (
            <table>
              <tr style={{ border: "2px solid black" }}>
                <td key={item}>{item.id} : </td>
                <td>{item.name}</td>
                <td>
                  <button
                    onClick={() => {
                      this.setState({ Name: true });
                      this.setState({ ID: item.id });
                    }}
                  >
                    Edit
                  </button>
                  <button>Delete</button>
                  <button>View</button>
                </td>
              </tr>
            </table>
          ))}
        </div>

        {/* {this.Count == 1 ? <ROUTE /> : ""} */}
      </>
    );
  }
}
export default STUDENT;
