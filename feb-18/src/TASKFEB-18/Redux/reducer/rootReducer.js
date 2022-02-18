import { combineReducers } from "redux";

let initialState = {
  Data: [],
  Error: "",
};

const ReducerForGet = (State = initialState, Action) => {
  switch (Action.type) {
    case "Request":
      return { ...State };

    case "Success ":
      return { ...State, Data: Action.payload };

    case "Error":
      return { ...State, Error: Action.payload };

    default:
      console.log(State);
      return State;
  }
};

const rootReducer = combineReducers({ ReducerForGet });
export default rootReducer;
