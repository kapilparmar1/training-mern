import { useState, useEffect } from "react";
import MyContext from "./Context";
import "./Child.css";

const Child = ({ submit }) => {
  const [myArray, setMyArray] = useState([]);

  const GetData = () => {
    if (JSON.parse(localStorage.getItem("TODOLIST")) !== null) {
      setMyArray(JSON.parse(localStorage.getItem("TODOLIST")));
    } else {
      console.log("2");
      setMyArray(null);
    }
  };
  useEffect(() => {
    GetData();
  }, []);

  const ONCLICK = (index) => {
    let ClickArray = [];
    ClickArray = myArray;
    let Length = myArray.length;
    if (Length == 1) {
      localStorage.clear();
    } else {
      ClickArray.splice(index, 1);
      localStorage.setItem("TODOLIST", JSON.stringify(ClickArray));
    }
    window.location.reload();
  };

  return (
    <>
      <MyContext.Consumer>
        {(Data) => {
          if (Data && submit) {
            let DATA = [];
            if (myArray != null) {
              DATA.push(...myArray, Data);
            } else {
              DATA.push(Data);
            }
            localStorage.setItem("TODOLIST", JSON.stringify(DATA));

            window.location.reload();
          }
          return (
            <div>
              {myArray === null ? (
                <ul class="zmdi-hc-ul">
                  <li>
                    {" "}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginLeft: "-45px",
                      }}
                    >
                      <h3>Fetching List...</h3>
                      <i
                        style={{ marginLeft: "830px", marginTop: "22px" }}
                        class="zmdi-hc-li zmdi zmdi-refresh zmdi-hc-spin"
                      ></i>
                    </div>
                  </li>
                </ul>
              ) : (
                myArray.map((arrayData, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "18.2%",
                      height: "5vh",
                      background: "white",
                      marginLeft: "628px",
                      marginTop: "10px",
                      border: "1px solid black",
                    }}
                  >
                    <div
                      className="ONHOVER"
                      style={{ marginLeft: "-1px", marginTop: "7px" }}
                    >
                      <input
                        readOnly
                        style={{
                          border: "none",
                          width: "97%",
                          fontSize: "18px",
                          fontWeight: "bolder",
                          paddingLeft: "2px",
                          paddingBottom: "3px",
                        }}
                        value={arrayData}
                      />
                    </div>
                    <div className="Change">
                      <i
                        onClick={() => ONCLICK(index)}
                        style={{
                          marginTop: "10px",
                          cursor: "pointer",
                          marginLeft: "6px",
                        }}
                        class="zmdi zmdi-delete zmdi-hc-lg "
                      ></i>
                    </div>
                  </div>
                ))
              )}
            </div>
          );
        }}
      </MyContext.Consumer>
    </>
  );
};

export default Child;
