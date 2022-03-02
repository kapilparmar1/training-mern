import React, { useState } from "react";
import axios from "axios";

const TASK = () => {
  const [user, setUser] = useState({ name: "", pass: "" });
  const ONCLICK = async (e) => {
    e.preventDefault();
    let res = await axios.post("http://localhost:8000/", { ...user });

    if (res.status === 200) {
      alert("Success");
    } else {
      alert("Failed");
    }
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <form>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, pass: e.target.value })}
          />
          <br />
          <button onClick={(e) => ONCLICK(e)}>Login</button>
        </form>
      </div>
    </>
  );
};

export default TASK;
