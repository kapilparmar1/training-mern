import react from "react";

class USER extends react.Component {
  Count = 0;
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false,
      clicked: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
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
    let styleElement = {
      margin: "auto",
      border: "1px solid black",
      borderCollapse: "collapse",
      padding: "5px",
    };
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <h1> Fetch data from an api in react </h1>{" "}
        <table>
          <thead>User Table</thead>
          <th>
            <td>Id</td>
            <td>Email</td>
            <td>FirstName</td>
            <td>LastName</td>
            <td>Avatar</td>
          </th>
        </table>
        {items.data.map((item) => (
          <table>
            <tr style={styleElement}>
              <td style={styleElement}>{item.id} : </td>
              <img src={item.avatar} alt="image" />
              <td>
                {this.state.clicked
                  ? `${item.email}, ${item.first_name}, ${item.last_name}
                      `
                  : ""}
              </td>
              <button
                onClick={() => {
                  this.Count = this.Count + 1;
                  if (this.Count == 1) {
                    this.setState({ clicked: true });
                  } else if (this.Count == 2) {
                    this.setState({ clicked: false });
                    this.Count = 0;
                  }
                }}
              >
                {!this.state.clicked ? "Show More" : "Show less"}
              </button>
            </tr>
          </table>
        ))}
      </div>
    );
  }
}
export default USER;
