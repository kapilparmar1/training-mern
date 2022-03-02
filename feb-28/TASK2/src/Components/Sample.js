import React from "react";
import { connect } from "react-redux";
import store from "./store/store";

const Sample = (props) => {
  console.log(store.getState());
  return (
    <>
      {" "}
      <div style={{ textAlign: "center" }}>
        <table>
          <thead>
            <tr>
              <th style={{ border: "1px solid balck" }}>Fname</th>
              <th style={{ border: "1px solid balck" }}>Lname</th>
              <th style={{ border: "1px solid balck" }}>Email</th>
              <th>Age</th>
              <th>Feet</th>
              <th>Inch</th>
              <th>Weight</th>
              <th>Color</th>
            </tr>
          </thead>

          {props.getState.map((data, index) => (
            <tbody key={index}>
              <tr>
                <td>{data.FirstName}</td>
                <td>{data.LastName}</td>
                <td>{data.Email}</td>
                <td>{data.age}</td>
                <td>{data.heightFeet}</td>
                <td>{data.heightInch}</td>
                <td>{data.weight}</td>
                <td>{data.color}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

const STATE = (state) => {
  return {
    getState: state,
  };
};
const CONNECT = connect(STATE, null)(Sample);
export default CONNECT;
