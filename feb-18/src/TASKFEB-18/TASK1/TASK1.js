import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import getCall from "../Redux/action/getAction";
import store from "../Redux/store/store";

export const TASK1 = ({ get }) => {
  const ONCLICK = () => {
    // props.getIt();
    // getCall();
    get();
    // console.log(props);
  };
  return (
    <div>
      <button
        onClick={() => {
          ONCLICK();
        }}
      >
        GET It
      </button>
    </div>
  );
};

// const getIt = () => {
//   return getCall();
// };
const DISPATCH = (dispatch) => {
  //   return bindActionCreators({ getIt }, dispatch);
  return {
    get: () => dispatch(getCall()),
  };
};

const STATE = (state) => {
  console.log(state);
  return {
    data: state.Data,
  };
};
const CONNECT = connect(STATE, DISPATCH)(TASK1);
export default CONNECT;
