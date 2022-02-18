import { combineReducers } from "redux";
let initialState = {
  Address: "",
};
const Reducer1 = (State = initialState, Action) => {
  switch (Action.type) {
    case "1":
      return (State = { ...State, Address: Action.payload });
    default:
      return State;
  }
};
let IS = {
  Contact: "",
};
const Reducer3 = (State = IS, Action) => {
  if (Action.type === "3") {
    return (State = { ...State, Contact: Action.payload });
  } else {
    return State;
  }
};
let initial = {
  Email: "",
};
const Reducer2 = (State = initial, Action) => {
  switch (Action.type) {
    case "2":
      return (State = { ...State, Email: Action.payload });
    default:
      return State;
  }
};

const Reducer4 = (
  State = {
    Email: "",
    Password: "",
    DATA: "",
  },
  Action
) => {
  switch (Action.type) {
    case "4":
      if (Action.Email && Action.Password) {
        return { ...State, Email: Action.Email, Password: Action.Password };
      } else {
        console.log("Action payload :", Action.payload);
        return (State = { ...State, DATA: Action.payload });
      }
    default:
      return State;
  }
};
let initialCalc = {
  first: "",
  second: "",
  operator: "",
  result: "",
};
const Reducer5 = (State = initialCalc, Action) => {
  if (Action.type === "Calc") {
    State = {
      ...State,
      first: Action.payload.first,
      second: Action.payload.second,
      operator: Action.payload.operator,
    };
    return (State = {
      ...State,
      result: eval(`${State.first}${State.operator}${State.second}`),
    });
  } else {
    return State;
  }
};

const rootReducer = combineReducers({
  Reducer1,
  Reducer2,
  Reducer3,
  Reducer4,
  Reducer5,
});
export default rootReducer;
