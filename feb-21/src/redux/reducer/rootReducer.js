import { combineReducers } from "redux";

const initialState = {
  groceryList: [],
};
const rootReducer1 = (State = initialState, Action) => {
  switch (Action.type) {
    case "List":
      return { ...State, groceryList: Action.payload };

    default:
      return State;
  }
};

const rootReducer2 = (State = [], Action) => {
  switch (Action.type) {
    case "Mod":
      console.log("ACtion : ", Action);

      return Action.payload;

    default:
      return State;
  }
};
const rootReducer = combineReducers({ rootReducer1, rootReducer2 });
export default rootReducer;
