import React from "react";
import { bindActionCreators } from "redux";

import { connect } from "react-redux";
import { Action1, Action2 } from "../Actions";

const TASK1 = (props) => {
  console.log("Action : ", props.Action2("NEW"));
  console.log(props.name);
  console.log(props.Name);
  return <h1>HEY</h1>;
};

const DISPATCH = (dispatch) => {
  return bindActionCreators({ Action1, Action2 }, dispatch);
};
const STATE = (state) => {
  console.log(state);
  return {
    name: state.Reducer1.name,
    Name: state.Reducer2.Name,
  };
};
const callOut = connect(STATE, DISPATCH)(TASK1);
export default callOut;
