import react from "react";
import HEADER from "./Header";

class USER extends react.Component {
  Count = 0;
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false,
      clicked: false,
      IndividualData: {},
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
    let styleEle1 = {
      border: "1px solid black",
      paddingRight: "5px",
      paddingLeft: "5px",
    };
    let styleEle2 = {
      border: "1px solid black",
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
        <div style={{ "margin-left": "50px" }}>
          <table>
            <thead>
              <HEADER
                Heading="User-Table"
                title={this.state.IndividualData.email}
                clicked={this.state.clicked}
              />
            </thead>
            <th>
              <td>Id</td>
            </th>
          </table>
        </div>

        {items.data.map((item) => (
          <div
            style={{
              "margin-left": "50px",
              width: "50vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <table
              style={{
                border: "1px solid black",
              }}
            >
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                  }}
                >
                  {item.id}
                </td>
                <td>
                  <button
                    onClick={() => {
                      this.setState({
                        IndividualData: item,
                      });
                      //  this.Count = this.Count + 1;
                      this.setState({ clicked: true });
                    }}
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                      paddingTop: "4px",
                      paddingBottom: "4px",
                    }}
                  >
                    Show
                  </button>
                </td>
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
                    Email : {this.state.IndividualData.email}
                  </td>
                </tr>{" "}
                <tr>
                  <td
                    style={{
                      border: "1px solid black",
                    }}
                  >
                    First_Name :{this.state.IndividualData.first_name}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      border: "1px solid black",
                    }}
                  >
                    Last_Name : {this.state.IndividualData.last_name}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      border: "1px solid black",
                    }}
                  >
                    {" "}
                    Avatar :{" "}
                    <img
                      src={this.state.IndividualData.avatar}
                      alt="image"
                      width={50}
                      height={50}
                    />
                  </td>
                </tr>
              </tr>{" "}
            </table>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
export default USER;
