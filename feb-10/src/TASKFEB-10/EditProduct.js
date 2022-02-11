import React, { useState } from "react";
import { useParams, useSearchParams, useHistory } from "react-router-dom";

const EditProduct = () => {
  const [loc] = useSearchParams();
  const [Name, setName] = useState("");

  const array = JSON.parse(localStorage.getItem("PRODUCTDATA"));
  //   console.log("id :", loc.get("company"));
  if (!loc) {
    alert("loc is not present");
  }

  const ONCHANGE = (e) => {
    setName(e.target.value);
  };
  const Save = () => {
    array[loc.get("id") - 1].company = Name;
    if (Name != "") {
      localStorage.setItem("PRODUCTDATA", JSON.stringify(array));
      alert("saved");
    }
  };
  return (
    <>
      <h1>ID : {array ? loc.get("id") : "Null"} </h1>
      <input
        type="text"
        placeholder={
          array ? array[loc.get("id") - 1].company : "Local Storage is empty"
        }
        onChange={(e) => ONCHANGE(e)}
      />
      <br />
      <button onClick={() => Save()}>Save</button>
    </>
  );
};

export default EditProduct;
