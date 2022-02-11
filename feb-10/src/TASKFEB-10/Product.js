import React from "react";
import PRODUCTLIST from "./PRODUCTDATA";
import { Link, Outlet } from "react-router-dom";
const User = () => {
  localStorage.setItem("PRODUCTDATA", JSON.stringify(PRODUCTLIST));
  return (
    <>
      <div class="home-component">
        <h1>This is the Product Component </h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <table
            style={{
              border: "1px solid black",
              width: "100%",
            }}
          >
            <tr>
              <th
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginLeft: "-70px",
                }}
              >
                <td style={{ textAlign: "center", marginLeft: "-20px" }}>ID</td>
                <td
                  style={{
                    textAlign: "center",
                    marginLeft: "-50px",
                  }}
                >
                  Model
                </td>
                <td
                  style={{
                    textAlign: "center",
                  }}
                >
                  Company
                </td>
              </th>
            </tr>
          </table>
          {PRODUCTLIST.map((data) => (
            <div style={{ display: "flex" }}>
              <div>
                <table style={{ border: "1px solid black", width: "100%" }}>
                  <tr>
                    <td
                      style={{
                        border: "1px solid black",
                        width: "30px",
                        textAlign: "center",
                      }}
                    >
                      {data.id}
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        width: "150px",
                        textAlign: "center",
                      }}
                    >
                      {data.car_model}
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        width: "150px",
                        textAlign: "center",
                      }}
                    >
                      {data.company}
                    </td>
                  </tr>
                </table>
              </div>
              <div>
                <button
                  style={{
                    marginLeft: "10px",
                    background: "black",
                  }}
                >
                  <Link
                    style={{
                      color: "white",
                      fontSize: "12px",
                      fontWeight: "bolder",
                    }}
                    to={`/showproductlist?id=${data.id}&model=${data.car_model}&company=${data.company}`}
                  >
                    Edit
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Outlet /> */}
    </>
  );
};

export default User;
