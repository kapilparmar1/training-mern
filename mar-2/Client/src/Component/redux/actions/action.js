import axios from "axios";
const Action1 = () => {
  return async (dispatch) => {
    let res = await axios.get("http://localhost:8000/");
    dispatch(HomeAction(res.data));
  };
};

const HomeAction = (data) => {
  return {
    type: "home",
    payload: data,
  };
};

export const Action2 = () => {
  return async (dispatch) => {
    let res = await axios.get("http://localhost:8000/authors");
    dispatch(AuthorAction(res.data));
  };
};

const AuthorAction = (data) => {
  return {
    type: "author",
    payload: data,
  };
};

export const Action3 = (id) => {
  return async (dispatch) => {
    let res = await axios.get(`http://localhost:8000/user/:${id}`);
    dispatch(UserAction(res.data));
  };
};

const UserAction = (data) => {
  return {
    type: "user",
    payload: data,
  };
};

export default Action1;
