import React from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";

const Show = () => {
  const navigate = useNavigate();
  const [Loc, setLoc] = useSearchParams();
  let body = Loc.get("body");
  return (
    <div>
      <h1>Body is : {body}</h1>
      <br />
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default Show;
