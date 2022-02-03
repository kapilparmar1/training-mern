import react from "react";
import HEADER from "./Header";

class PRODUCT extends react.Component {
  Count = 0;
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false,
      clicked: false,
      // Name: "",
      // Year: "",
      // Color: "",
      // Pantone: "",
      // ID: "",
      IndividualData: {},
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
      <>
        <div className="App">
          <div style={{ "margin-left": "50px" }}>
            <table>
              <thead>
                <HEADER
                  Heading="Product-Table"
                  title={this.state.IndividualData.name}
                  clicked={this.state.clicked}
                />
              </thead>
              <th>
                <td>Id</td>
                {/* <td>Name</td>
            <td>Year</td>
            <td>Color</td>
            <td>Pantone_Value</td> */}
              </th>
            </table>
          </div>

          {items.data.map((item) => (
            <div style={{ "margin-left": "50px" }}>
              <table
                style={{
                  border: "1px solid black",
                }}
              >
                <tr>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                    key={item}
                  >
                    {item.id}
                  </td>

                  <button
                    onClick={() => {
                      this.setState({
                        IndividualData: item,
                      });
                      //  this.Count = this.Count + 1;
                      this.setState({ clicked: true });
                      // if (this.Count == 1) {
                      //   this.setState({ clicked: true });

                      // } else if (this.Count == 2) {
                      //   this.setState({ clicked: false });
                      //   this.Count = 0;
                      // }
                    }}
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                      paddingTop: "4px",
                      paddingBottom: "4px",
                    }}
                  >
                    {/* {!this.state.clicked ? "Show More" : "Show less"} */}
                    Show
                  </button>
                </tr>
              </table>
            </div>
          ))}
          <div style={{ "margin-left": "200px", "margin-top": "-170px" }}>
            {this.state.clicked ? (
              <table
                style={{
                  border: "1px solid black",
                }}
              >
                <tr>
                  <tr>
                    <td
                      style={{
                        border: "1px solid black",
                      }}
                    >
                      ID : {this.state.IndividualData.id}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        border: "1px solid black",
                      }}
                    >
                      Name : {this.state.IndividualData.name}
                    </td>
                  </tr>{" "}
                  <tr>
                    <td
                      style={{
                        border: "1px solid black",
                      }}
                    >
                      Year :{this.state.IndividualData.year}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        border: "1px solid black",
                      }}
                    >
                      Color : {this.state.IndividualData.color}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        border: "1px solid black",
                      }}
                    >
                      {" "}
                      Pantone : {this.state.IndividualData.pantone_value}
                    </td>
                  </tr>
                </tr>{" "}
              </table>
            ) : (
              ""
            )}
          </div>
        </div>
      </>
    );
  }
}
export default PRODUCT;
