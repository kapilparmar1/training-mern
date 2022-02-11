import React from "react";
import GROUPLIST from "./GROUPDATA";
import { Link, Outlet } from "react-router-dom";
const Group = () => {
  localStorage.setItem("GROUPDATA", JSON.stringify(GROUPLIST));
  return (
    <>
      <div class="home-component">
        <h1>This is the Group Component </h1>
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
              <th style={{ display: "flex", justifyContent: "space-around" }}>
                <td style={{ textAlign: "center" }}>ID</td>
                <td
                  style={{
                    textAlign: "center",
                  }}
                >
                  Details
                </td>
              </th>
            </tr>
          </table>
          {GROUPLIST.map((data, index) => (
            <div style={{ display: "flex" }}>
              <div key={index}>
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
                      {data.groupName}
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
                    to={`/showgrouplist?id=${data.id}&groupName=${data.groupName}`}
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

export default Group;
