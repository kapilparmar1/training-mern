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
      let Index = State.findIndex((Index) => Index.id === Action.payload.id);

      if (Index !== -1) {
        let arr = State;
        console.log("Arr count before : ", arr[Index].count);
        arr.splice(Action.payload.id, 1, {
          id: Action.payload.id,
          Grocery: Action.payload.Grocery,
          count: arr[Index].count + 1,
        });
        State = arr;
        return [...State];
      } else {
        return [...State, Action.payload];
      }

    default:
      return State;
  }
};
const rootReducer = combineReducers({ rootReducer1, rootReducer2 });
export default rootReducer;
