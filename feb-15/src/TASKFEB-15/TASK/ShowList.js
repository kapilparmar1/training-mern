import React, { useEffect, useState } from "react";
import store from "../Store";

const ShowList = () => {
  const [DATA, setDATA] = useState([]);

  useEffect(() => {
    setDATA(store.getState());
  });
  return (
    <div>
      <table style={{ justifyContent: "center", display: "flex" }}>
        <th>
          <tr>
            <td>FName</td>
            <td>LName</td>
            <td>Gender</td>
            <td>Age</td>
            <td>Qualification</td>
            <td>Organization</td>
            <td>Eligible ?</td>
          </tr>
        </th>
      </table>
      {DATA
        ? DATA.map((data, index) => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "15px",
              }}
              key={index}
            >
              <table style={{ border: "2px solid black" }}>
                <tr>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                    }}
                  >
                    {data.FName}
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                    }}
                  >
                    {data.LName}
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                    }}
                  >
                    {data.Gender}
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                    }}
                  >
                    {data.Age}
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                    }}
                  >
                    {data.Qualification}
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                    }}
                  >
                    {data.Organization}
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                    }}
                  >
                    {data.isEligible}
                  </td>
                </tr>
              </table>
            </div>
          ))
        : ""}
    </div>
  );
};

export default ShowList;
