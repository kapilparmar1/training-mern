import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sendList, sendModifiedList } from "../action/action";
import groceryList from "../Grocery";
import "./TASk.css";

export class TASK extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedArray: [],
      ONSTRIKE: [],
      ONCLICK: false,
    };
  }
  componentDidMount() {
    this.props.sendList(groceryList);
  }
  ONCLICK = () => {
    return "Strike";
  };

  render() {
    let ONCLICK = false;
    return (
      <>
        <div
          style={{
            display: "flex",
            height: "250px",
            width: "100%",
            background: "black",
            color: "white",
            fontSize: "32px",
            fontFamily: "monospace",
            fontWeight: "bolder",

            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Hello Basket
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "pink",
            height: "60px",
            width: "30%",
            border: "0.5px solid rgba(245,77,149)",
            marginLeft: "450px",
            borderRadius: "5px",
            marginTop: "20px",
          }}
        >
          <input
            style={{
              marginLeft: "70px",
              width: "55%",
              height: "25px",
              paddingLeft: "10px",
            }}
            type="text"
            placeholder="Search..."
          />
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              marginLeft: "100px",
            }}
          >
            <h2
              style={{
                marginLeft: "40px",
              }}
            >
              GROCERIES
            </h2>
            {this.props.data
              ? this.props.data.map((data, index) => (
                  <div
                    key={index}
                    style={{
                      height: "40px",
                      color: "white",
                      width: "380px",
                      textAlign: "center",
                      borderRadius: "5px",
                      boxShadow: "2px 2px 5px rgba(70,57,57)",
                      background: "rgba(34,32,32)",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      let CHECK = this.state.clickedArray.some((i) =>
                        i.Grocery.includes(data.Grocery)
                      );
                      if (CHECK) {
                        let Index = this.state.clickedArray.findIndex(
                          (Index) => Index.id === data.id
                        );
                        let count = this.state.clickedArray[Index].count;
                        console.log("cout is :", count);
                        if (
                          !this.state.ONSTRIKE.some((i) =>
                            i.includes(data.Grocery)
                          )
                        ) {
                          let newArray = this.state.clickedArray;
                          newArray.splice(Index, 1, {
                            id: data.id,
                            Grocery: data.Grocery,
                            count: count + 1,
                          });

                          console.log("After change is : ", newArray);

                          this.setState(
                            {
                              clickedArray: newArray,
                            },

                            () => {
                              this.props.sendModifiedList(
                                this.state.clickedArray
                              );
                              console.log("List : ", this.state.clickedArray);
                            }
                          );
                        }
                      } else {
                        this.setState(
                          {
                            clickedArray: [
                              ...this.state.clickedArray,
                              {
                                id: data.id,
                                Grocery: data.Grocery,
                                count: 1,
                              },
                            ],
                          },

                          () => {
                            this.props.sendModifiedList({
                              id: data.id,
                              Grocery: data.Grocery,
                              count: 1,
                            });
                            console.log("List : ", this.state.clickedArray);
                          }
                        );
                      }
                    }}
                  >
                    <h3>{data.Grocery}</h3>
                  </div>
                ))
              : ""}
          </div>
          <div className="Parent" style={{ marginLeft: "450px" }}>
            <h2>BASKET</h2>
            {this.state.clickedArray.map((data, index) => (
              <div
                onClick={(event) => {
                  if (event.target.style.textDecoration === "none") {
                    event.target.style.textDecoration = "line-through";
                    event.target.style.textDecorationColor = "black";
                    event.target.style.textDecorationThickness = "22%";
                    this.setState(
                      {
                        ONSTRIKE: [...this.state.ONSTRIKE, data.Grocery],
                      },
                      () => console.log("ONSSTIE : ", this.state.ONSTRIKE)
                    );
                  } else {
                    event.target.style.textDecoration = "none";
                    let array = this.state.ONSTRIKE;
                    let Index = this.state.ONSTRIKE.findIndex(
                      (Index) => Index === data.Grocery
                    );
                    array.splice(Index, 1);
                    this.setState(
                      {
                        ONSTRIKE: array,
                      },
                      () => console.log("ONSSTIE : ", this.state.ONSTRIKE)
                    );
                  }
                }}
                key={index}
                style={{
                  marginTop: "10px",
                  display: "flex",
                  height: "40px",
                  color: "white",
                  width: "200px",
                  borderRadius: "5px",
                  boxShadow: "2px 2px 5px rgba(70,57,57)",
                  background: "rgba(34,32,32)",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                <div className="Child">
                  <i
                    class="zmdi zmdi-minus-square zmdi-hc-lg "
                    style={{
                      marginTop: "13.5px",
                      marginLeft: "15px",
                    }}
                  ></i>
                </div>
                <h3
                  style={{
                    marginTop: "8px",
                    marginLeft: "20px",
                  }}
                >
                  {" "}
                  {data.count}
                </h3>
                <div
                  style={{
                    marginTop: "-12px",
                    marginLeft: "15px",
                  }}
                >
                  <h3>{data.Grocery}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
const DISPATCH = (dispatch) => {
  return bindActionCreators({ sendList, sendModifiedList }, dispatch);
};
const STATE = (state) => {
  console.log("State is :", state);
  return {
    data: state.rootReducer1.groceryList,
    ArrayData: state.rootReducer2,
  };
};

const CONNECT = connect(STATE, DISPATCH)(TASK);
export default CONNECT;
