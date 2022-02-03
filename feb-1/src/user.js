import react from "react";

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
            <thead>User Table</thead>
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
            <table>
              <tr>
                <td>{item.id} : </td>
                <td>
                  <button
                    onClick={() => {
                      this.setState({ IndividualData: item });
                      //  this.Count = this.Count + 1;
                      this.setState({ clicked: true });
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
            <table>
              <tr>
                <tr>
                  <td>ID : {this.state.IndividualData.id}</td>
                </tr>
                <tr>
                  <td>Email : {this.state.IndividualData.email}</td>
                </tr>{" "}
                <tr>
                  <td>First_Name :{this.state.IndividualData.first_name}</td>
                </tr>
                <tr>
                  <td>Last_Name : {this.state.IndividualData.last_name}</td>
                </tr>
                <tr>
                  <td>
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
