import axios from "axios";

const getCall = () => {
  return async (dispatch) => {
    dispatch(apiRequest());

    let res = await axios.get("https://retoolapi.dev/BUCPSc/posts");
    console.log(res);
    try {
      if (res) {
        dispatch(apiSuccess(res));
      }
    } catch (err) {
      dispatch(apiError(err));
    }
  };
};

const apiRequest = () => {
  return {
    type: "Request",
  };
};

export const apiSuccess = (data) => {
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
