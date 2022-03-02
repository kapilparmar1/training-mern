import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import Action from "./action/action";

let Data = {
  FirstName: "",
  LastName: "",
  Email: "",
  age: "",
  heightFeet: "",
  heightInch: "",
  weight: "",
  color: "",
};
const Home = () => {
  return (
    <>
      <Step1 />
    </>
  );
};

export default Home;

export const Step1 = () => {
  const regPat = /^[A-Za-z]*$/;
  const [error, setError] = useState({ FirstName: "", LastName: "" });
  const [validate, setValidate] = useState({
    Error: "Please enter a valid name. Name can only contain A-Z",
    flag: false,
  });
  const navigate = useNavigate();
  const Checking = (e) => {
    e.preventDefault();
    if (
      error.FirstName === "" ||
      error.LastName === "" ||
      regPat.exec(error.FirstName) === null ||
      regPat.exec(error.LastName) === null
    ) {
      setValidate({ ...validate, flag: true });
    } else {
      setValidate({ ...validate, flag: false });
      Data = {
        FirstName: error.FirstName,
        LastName: error.LastName,
      };

      navigate("/step2");
    }
  };
  const ONCHANGE = (e) => {
    console.log(e.target.pattern);
    setError({ ...error, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h1>Step1</h1>
      <br />
      <div style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
        {validate.flag ? validate.Error : ""}
      </div>
      <br />
      <form>
        <input
          type="text"
          name="FirstName"
          placeholder="FirstName"
          onChange={(e) => ONCHANGE(e)}
        />
        <br />
        <input
          type="text"
          name="LastName"
          placeholder="LastName"
          onChange={(e) => ONCHANGE(e)}
        />
        <br />
        <br />
        <button disabled>Previous</button>
        <button onClick={(e) => Checking(e)}> Next</button>
      </form>
    </>
  );
};

export const Step2 = () => {
  const regPat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  const navigate = useNavigate();
  const [validate, setValidate] = useState({
    Error: "Please enter a valid email",
    flag: false,
  });
  const [Email, setEmail] = useState("");

  const ONCLICK = (e) => {
    e.preventDefault();
    if (Email === "" || regPat.exec(Email) === null) {
      setValidate({ ...validate, flag: true });
    } else {
      setValidate({ ...validate, flag: false });
      Data = {
        FirstName: Data.FirstName,
        LastName: Data.LastName,
        Email: Email,
      };

      navigate("/step3");
    }
  };
  return (
    <>
      <h1>Step2</h1>
      <div style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
        {validate.flag ? validate.Error : ""}
      </div>
      <br />
      <form>
        <input
          type="email"
          name="Email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <button onClick={() => navigate("/step1")}>Previous</button>
        <button onClick={(e) => ONCLICK(e)}>Next</button>
      </form>
    </>
  );
};

export const Step3 = () => {
  const [user, setUser] = useState({
    age: "",
    heightFeet: "",
    heightInch: "",
    weight: "",
  });

  const [validate, setValidate] = useState({
    Error1: "Please enter a valid age",
    Error2: "Height or Weight accepts only numbers 0 - 9",
    flag1: false,
    flag2: false,
  });
  const navigate = useNavigate();
  const regPat = /^[0-9]*$/;
  const ONCLICK = (e) => {
    e.preventDefault();
    if (
      user.age === "" ||
      user.heightFeet === "" ||
      user.heightInch === "" ||
      user.weight === ""
    ) {
      setValidate({ ...validate, flag1: true });
    } else if (
      regPat.exec(user.heightFeet) === null ||
      regPat.exec(user.heightInch) === null ||
      regPat.exec(user.weight) === null
    ) {
      setValidate({ ...validate, flag1: false, flag2: true });
    } else {
      setValidate({ ...validate, flag1: false, flag2: false });
      Data = {
        FirstName: Data.FirstName,
        LastName: Data.LastName,
        Email: Data.Email,
        age: user.age,
        heightFeet: user.heightFeet,
        heightInch: user.heightInch,
        weight: user.weight,
      };

      navigate("/step4");
    }
  };
  const ONCHANGE = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h1>Step3</h1>
      <div style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
        {validate.flag1
          ? validate.Error1
          : validate.flag2
          ? validate.Error2
          : ""}
      </div>
      <br />
      <form>
        <label htmlFor="">Age : </label>
        <select name="age" id="age" onChange={(e) => ONCHANGE(e)}>
          <option value="">Select</option>
          <option value="17 and Under">17 and Under</option>
          <option value="18-24">18-24</option>
          <option value="25-34">25-34</option>
          <option value="34 and Above">34 and Above</option>
        </select>
        <br />
        <label htmlFor="">Height (ft) : </label>
        <input type="text" name="heightFeet" onChange={(e) => ONCHANGE(e)} />
        <br />
        <label htmlFor="">Height (in) : </label>
        <input type="text" name="heightInch" onChange={(e) => ONCHANGE(e)} />
        <br />
        <label htmlFor="">Weight (kg) : </label>
        <input type="text" name="weight" onChange={(e) => ONCHANGE(e)} />
        <br />
        <button onClick={() => navigate("/step2")}>Previous</button>
        <button onClick={(e) => ONCLICK(e)}>Next</button>
      </form>
    </>
  );
};

export const Step4 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validate, setValidate] = useState({
    Error: "Please enter a valid color",
    flag: false,
  });

  const [color, setColor] = useState("");
  const ONCLICK = (e) => {
    e.preventDefault();
    if (color === "") {
      setValidate({ ...validate, flag: true });
    } else {
      setValidate({ ...validate, flag: false });
      Data = {
        FirstName: Data.FirstName,
        LastName: Data.LastName,
        Email: Data.Email,
        age: Data.age,
        heightFeet: Data.heightFeet,
        heightInch: Data.heightInch,
        weight: Data.weight,
        color: color,
      };

      dispatch(Action(Data));
      navigate("/step5");
    }
  };
  return (
    <>
      <h1>Step4</h1>
      <div style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
        {validate.flag ? validate.Error : ""}
      </div>
      <br />
      <form action="">
        <label htmlFor="">Favorite Color : </label>
        <select name="color" onChange={(e) => setColor(e.target.value)}>
          <option value="">Select</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="blue">Blue</option>
          <option value="grey">Grey</option>
        </select>
        <br />
        <br />
        <button onClick={() => navigate("/step3")}> Previous</button>

        <button onClick={(e) => ONCLICK(e)}>Next</button>
      </form>
    </>
  );
};

export const Step5 = () => {
  return (
    <>
      <h1>Step5</h1>
      <h2>Success</h2>
      <button>
        <Link style={{ textDecoration: "none", color: "black" }} to="/step1">
          Step1
        </Link>{" "}
      </button>
      <button disabled>Next</button>
    </>
  );
};
