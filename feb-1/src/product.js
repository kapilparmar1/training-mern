import react from "react";

class PRODUCT extends react.Component {
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
    fetch("https://reqres.in/api/products")
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

    return (
      <div className="App">
        <h1> Fetch data from an api in react </h1>{" "}
        <table>
          <thead>Product Table</thead>
          <th>
            <td>Id</td>
            {/* <td>Name</td>
            <td>Year</td>
            <td>Color</td>
            <td>Pantone_Value</td> */}
          </th>
        </table>
        {items.data.map((item) => (
          <table>
            <tr style={{ border: "2px solid black" }}>
              <td style={styleElement} key={item}>
                {item.id} :{" "}
              </td>

              {this.state.clicked ? (
                <table>
                  <tr>
                    <td>{item.name}</td>, <td>{item.year}</td>,{" "}
                    <td>{item.color}</td>,<td>{item.pantone_value}</td>
                  </tr>{" "}
                </table>
              ) : (
                ""
              )}

              {/* <td>{item.name},</td>
              <td>{item.year},</td>
              <td>{item.color},</td>
                <td>{item.pantone_value}</td> */}

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
export default PRODUCT;
