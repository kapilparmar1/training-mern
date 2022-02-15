let initialState = [];

const Reducer = (state = initialState, Action) => {
  switch (Action.type) {
    case "userForm":
      state = [...state, Action.payload];

      return state;

    default:
      return state;
  }
};
export default Reducer;
