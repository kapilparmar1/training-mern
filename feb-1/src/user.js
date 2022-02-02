import react from "react";

class USER extends react.Component {
  Count = 0;
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false,
      clicked: false,
      Email : "",
      FN : "",
      LN : "",
      Avatar : "",
      ID : "",
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
      
        <div style={{"margin-left" : "50px"}}>
        <table>
          <thead>User Table</thead>
          <th>
            <td>Id</td>
           
          </th>
        </table>

        </div>
        {items.data.map((item) => (
          <div style={{"margin-left" : "50px",width:"50vw","display" : "flex",alignItems : "center",justifyContent : "space-between"}}>
          <table >
            <tr >
              <td >{item.id} : </td>
              <td >
              <button
                onClick={() => {
                  this.setState({ID  : item.id,Email : item.email,FN : item.first_name,LN : item.last_name,Avatar : item.avatar})
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
        <div style={{"margin-left" : "200px", "margin-top" : "-170px"}}>
          {this.state.clicked  ? (
                <table>
                <tr>
                <tr><td>ID : {this.state.ID}</td></tr>
                <tr><td>Email : {this.state.Email}</td></tr> <tr><td>First_Name :{this.state.FN}</td></tr>
                    <tr><td>Last_Name : {this.state.LN}</td></tr><tr><td> Avatar : <img src={this.state.Avatar} alt="image" width={50} height={50}/></td></tr>
                
                    </tr>{" "}
                    </table>) : (
                ""
              )}
              </div>
      </div>
    );
  }
}
export default USER;
