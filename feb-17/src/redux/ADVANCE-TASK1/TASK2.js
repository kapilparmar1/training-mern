import React from "react";
import { bindActionCreators } from "redux";

import { connect } from "react-redux";
import { Action1, Action2, Action3 } from "../Actions";

const TASK2 = (props) => {
  props.Action1("NEW Delhi , 2nd floor , Carol Bagh");
  props.Action2("ABC@gmail.com");
  props.Action3("1236549870");

  return (
    <>
      <h1>HEY , Details are :</h1>
      <h2>{props.Address}</h2>
      <h2>{props.Email}</h2>
      <h2>{props.Contact}</h2>
    </>
  );
};

const DISPATCH = (dispatch) => {
  return bindActionCreators({ Action1, Action2, Action3 }, dispatch);
};
const STATE = (state) => {
  console.log(state);
  return {
    Address: state.Reducer1.Address,
    Email: state.Reducer2.Email,
    Contact: state.Reducer3.Contact,
  };
};
const callOut = connect(STATE, DISPATCH)(TASK2);
export default callOut;
