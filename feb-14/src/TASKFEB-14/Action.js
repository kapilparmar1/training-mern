const userAction = (DATA) => {
  return {
    type: "userList",
    payload: DATA,
  };
};
export const userActionEdit = (DATA, ID) => {
  return {
    type: "userListEdit",
    payload: DATA,
    id: ID,
  };
};
export default userAction;
