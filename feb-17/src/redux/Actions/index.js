export const Action1 = (Data) => {
  return {
    type: "1",
    payload: Data,
  };
};

export const Action2 = (Data) => {
  return {
    type: "2",
    payload: Data,
  };
};
export const Action3 = (Data) => {
  return {
    type: "3",
    payload: Data,
  };
};

export const Action4 = (Data, Email, Password) => {
  console.log("Data ain Action : ", Data);
  return {
    type: "4",
    payload: Data,
    Email: Email,
    Password: Password,
  };
};

export const Action5 = (Data) => {
  return {
    type: "Calc",
    payload: {
      first: Data.first,
      second: Data.second,
      operator: Data.operator,
    },
  };
};
