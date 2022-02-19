import axios from "axios";

const getCall = () => {
  return async (dispatch) => {
    dispatch(apiRequest());

    let res = await axios.get("https://retoolapi.dev/BUCPSc/posts");
    console.log(res.data);

    dispatch(apiSuccess(res.data));
  };
};

const apiRequest = () => {
  return {
    type: "Request",
  };
};

const apiSuccess = (data) => {
  return {
    type: "Success",
    payload: data,
  };
};

const apiError = (data) => {
  return {
    type: "Error",
    payload: data,
  };
};

export default getCall;
