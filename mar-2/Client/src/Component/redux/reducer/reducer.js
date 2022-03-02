let initialState = {
  home: "",
  author: [],
  user: {},
};
const reducer = (State = initialState, Action) => {
  switch (Action.type) {
    case "home":
      return { ...State, home: Action.payload };

    case "author":
      return { ...State, author: Action.payload };

    case "user":
      return { ...State, user: Action.payload };

    default:
      return State;
  }
};

export default reducer;
