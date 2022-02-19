import axios from "axios";
import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [Loc, setLoc] = useSearchParams();
  const id = Loc.get("id");
  const [body, setBody] = useState("");
  const [title, settitle] = useState("");

  const ONCLICK = async () => {
    let res = await axios.put(`https://retoolapi.dev/BUCPSc/posts/${id}`, {
      body,
      title,
    });
    if (res.status === 200) {
      navigate("/");
    }
  };
  return (
    <div>
      {id ? (
        <>
          <label>ID : </label>
          <input type="text" placeholder={id} readOnly />
        </>
      ) : (
        ""
      )}
      <br />
      <label htmlFor="">Title : </label>
      <input
        type="text"
        placeholder={Loc.get("title")}
        onChange={(e) => settitle(e.target.value)}
      />
      <br />
      <label htmlFor="">Body : </label>
      <input
        type="text"
        placeholder={Loc.get("body")}
        onChange={(e) => setBody(e.target.value)}
      />
      <br />
      <button onClick={() => ONCLICK()}>Edit</button>
    </div>
  );
};

export default Edit;
