import React, { useState } from "react";

const TASK1 = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  let Email = JSON.parse(localStorage.getItem("EMAIL"));
  let Name = JSON.parse(localStorage.getItem("NAME"));

  const SAVE = () => {
    localStorage.setItem("EMAIL", JSON.stringify(email));
    localStorage.setItem("NAME", JSON.stringify(name));

    window.location.reload();
  };
  const LOGOUT = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      {!Email && !Name ? (
        <div>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
          <br />
          <input type="text" onChange={(e) => setName(e.target.value)} />
          <br />
          <button onClick={() => SAVE()}>Login</button>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h1>User is Already logged In</h1>
          <br />
          <button onClick={() => LOGOUT()}>Log out</button>
        </div>
      )}
    </>
  );
};

export default TASK1;
