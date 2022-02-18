import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Action4 } from "../Actions";

const TASK2 = (props) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const ONCLICK = () => {
    props.Action4(null, Email, Password);
  };

  return (
    <>
      <h1>Login Page</h1>
      <input
        type="text"
        name="Email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
          console.log(Email);
        }}
      />
      <br />
      <input
        type="password"
        name="Password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={() => ONCLICK()}>
        <Link to="/router">Submit</Link>
      </button>
    </>
  );
};

const DISPATCH = (dispatch) => {
  return bindActionCreators({ Action4 }, dispatch);
};
const STATE = (state) => {
  console.log(state);
  return {};
};

const CONNECT = connect(STATE, DISPATCH)(TASK2);
export default CONNECT;
