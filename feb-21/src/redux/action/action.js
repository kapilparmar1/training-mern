import { bindActionCreators } from "redux";

export const sendList = (Data) => {
  return {
    type: "List",
    payload: Data,
  };
};
export const sendModifiedList = (Data) => {
  return {
    type: "Mod",
    payload: Data,
  };
};
