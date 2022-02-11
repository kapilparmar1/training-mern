import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const EditGroup = () => {
  const [loc] = useSearchParams();
  const [Name, setName] = useState("");
  // const navigate = useNavigate();

  const array = JSON.parse(localStorage.getItem("GROUPDATA"));
  // console.log("id :", loc.get("name"));
  if (!loc) {
    alert("loc is not present");
  }
  const ONCHANGE = (e) => {
    setName(e.target.value);
  };
  const Save = () => {
    array[loc.get("id")].groupName = Name;
    if (Name != "") {
      localStorage.setItem("GROUPDATA", JSON.stringify(array));
      alert("saved");
    }
  };
  return (
    <>
      <h1>ID : {array ? loc.get("id") : "Null"} </h1>
      <input
        type="text"
        placeholder={
          array ? array[loc.get("id")].groupName : "Local Storage is empty"
        }
        onChange={(e) => ONCHANGE(e)}
      />
      <br />
      <button onClick={() => Save()}>Save</button>
    </>
  );
};

export default EditGroup;
