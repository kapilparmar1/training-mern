import store from "./Store";

let initialState = [];

const Reducer = (state = initialState, Action) => {
  switch (Action.type) {
    case "userList":
      return (state = [...state, Action.payload]);

    case "userListEdit":
      let array = state;
      array.splice(Action.id, 1, Action.payload);
      return (state = array);

    default:
      return state;
  }
};
export default Reducer;
