const initialState = [];

const reducer = (State = initialState, Action) => {
  switch (Action.type) {
    case "Storage":
      return [...State, Action.payload];

    default:
      return State;
  }
};

export default reducer;
