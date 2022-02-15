const userAction = (DATA) => {
  return {
    type: "userForm",
    payload: DATA,
  };
};

export default userAction;
