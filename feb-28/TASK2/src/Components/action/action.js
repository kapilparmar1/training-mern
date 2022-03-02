const Action = (data) => {
  return {
    type: "Storage",
    payload: {
      FirstName: data.FirstName,
      LastName: data.LastName,
      Email: data.Email,
      age: data.age,
      heightFeet: data.heightFeet,
      heightInch: data.heightInch,
      weight: data.weight,
      color: data.color,
    },
  };
};

export default Action;
